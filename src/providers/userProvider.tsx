import { createContext, ReactNode, useEffect, useState } from "react";
import { Session, User } from "../services/api";
import { useNavigate } from "react-router-dom";
import * as api from "../services/api";

interface UserProviderProps {
  children: ReactNode | ReactNode[];
}

interface UserContextType {
  handleLogin(session: Session): void;
  handleLogout(): void;
  loading: boolean;
  user: null | User;
  token: null | string;
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

  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (token == null) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_ID_KEY);
    } else {
      localStorage.setItem(TOKEN_KEY, token);
    }
  }, [token]);

  useEffect(() => {
    if (user != null) {
      localStorage.setItem(USER_ID_KEY, user.id.toString());
    }
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (token != null) {
        const userId = localStorage.getItem(USER_ID_KEY) as string;

        // const user = await api.getUser(token, userId).catch(() => null);
        // if (user != null) {
        //   setUser(user);
        //   navigate("/home");
        // } else {
        //   setToken(null);
        // }
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  function handleLogin(session: Session) {
    setToken(session.accessToken);
    setUser(session.user);
    navigate("/home");
  }

  function handleLogout() {
    setToken(null);
    setUser(null);
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{ handleLogin, handleLogout, loading, user, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
