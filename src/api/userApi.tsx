import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'

export const userApi = () => {
  const navigate = useNavigate()
  const login = async (email: string, password: string) => {
      await api.post("/login", { email, password })
      .then(res => {
        toast.success("Login efetuado com sucesso")
        navigate("/home");
      })
      .catch(err => toast.error(err.response.data))
    }
  
  return{
      login
  }
}