import { Navigate,Outlet } from "react-router-dom"
import { useAuth } from "./src/context/authContext"


function ProtectedRoute() {
    const{loading,isAuth} = useAuth()

    if(loading) return <h1>Cargando...</h1>
    // si no esta autenticado vuelve al login
    if(!loading && !isAuth) return <Navigate to="/" replace/>

    // sigue con la que estaba dentro del protected route
    return <Outlet/>;
}

export default ProtectedRoute