import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'
import { IUser } from "../interfaces/user"

export const userApi = () => {
  const navigate = useNavigate()
  const login = async (
      email: string, 
      password: string, 
      setToken: (token: string) => void, 
      setUser: (user: IUser) => void) => {

      await api.post("/login", { email, password })
      .then(res => {
        localStorage.setItem('@TOKEN', res.data.accessToken)
        localStorage.setItem('@USERID', res.data.user.id)
        setToken(res.data.accessToken);
        setUser(res.data.user);
        toast.success("Login efetuado com sucesso")
        navigate("/home");
      })
      .catch(err => toast.error(err.response.data))
    }
  
  return{
      login
  }
}