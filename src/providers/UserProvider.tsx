import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { userApi } from "../api/userApi";
import { ILogin, IRegisterFieldValues, IUser } from "../interfaces/user";
import jwtDecode from "jwt-decode";


interface UserProviderProps {
  children: ReactNode | ReactNode[];
}

interface UserContextType {
  handleLogin(session: ILogin): void;
  handleLogout(): void;
  registerUser(data: IRegisterFieldValues): void;
  loading: boolean;
  user: null | IUser;
  token: null | string;
}

interface IJTWDecode {
  email: string,
  exp: string, 
  iat: string, 
  sub: string
}

const TOKEN_KEY = "@TOKEN";
const USER_ID_KEY = "@USERID";

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);
export const UserProvider = ({ children }: UserProviderProps) => {
  const [token, setToken] = useState<null | string>(
    localStorage.getItem(TOKEN_KEY)
  );

  const [user, setUser] = useState<null | IUser>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const Api = userApi()

  useEffect(() => {
    const loadUser = () => {
        const token = localStorage.getItem('@TOKEN')

        if(!token){
            return setTimeout(() => {
                setLoading(false)
                localStorage.removeItem('@USERID')
            }, 2000)
        }
        
        api.defaults.headers.common.Authorization = `Bearer ${token}`

        const decode:IJTWDecode = jwtDecode(token)
        
          api.get(`/users/${decode.sub}`)
          .then(res => {
              setUser(res.data.user)
              setToken(res.data.accessToken)
              navigate('/home')
          })
          .catch(() => {
            localStorage.removeItem('@TOKEN')
            localStorage.removeItem('@USERID')
          })
          .finally(() => setTimeout(() => {
              setLoading(false)
          }, 2000))
      } 

      loadUser()
  },[loading, token, user])

  const handleLogin = (session:ILogin) => {
    Api.login(session.email, session.password, setToken, setUser)
  }

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_ID_KEY);
    navigate("/");
  }

  const registerUser = (data: IRegisterFieldValues) => {

    Api.register(data)

  }

  return (
    <UserContext.Provider
      value={{ handleLogin, handleLogout, registerUser, loading, user, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
