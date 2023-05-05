import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";
export const ProtectedRoutes = () => {
    const { loading } = useUser()
    const user = localStorage.getItem("@USERID")
    if(loading){
        // return <Loading />
        return <div>Carregando</div>
    }
    if(!user){
        return <Navigate to="/login" replace/>
    }
    return <Outlet />
};