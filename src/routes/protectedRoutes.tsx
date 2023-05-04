import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../hooks/useUser";
export const ProtectedRoutes = () => {
    const { user, loading } = useUser()
    if(loading){
        // return <Loading />
        return <div>Carregando</div>
    }
    if(!user){
        return <Navigate to="/" replace/>
    }
    return <Outlet />
};