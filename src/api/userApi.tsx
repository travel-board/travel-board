import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'
import { IRegisterFieldValues, IUser } from "../interfaces/user"

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

  const register =async (data: IRegisterFieldValues) => {
    
    api.post("/users", data)
    .then(res => {
      toast.success("Usuário cadastrado com sucesso!")
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    })
    .catch(err => toast.error(err.response.data))

  }
  
  return{
      login,
      register
  }
}
