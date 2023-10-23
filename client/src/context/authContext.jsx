import { createContext,useState,useContext } from "react";
import { loginRequest, verifyTokenRequest } from "../api/auth";
import { set } from "react-hook-form";
import { useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext()
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within a AuthProvider")
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null) 
    const [isAuth, setIsAuth] = useState(false)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)
    // const singup = async (user)=>{
    //     const res = await loginRequest(values)
    // }
    const singin = async (user)=>{
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuth(true)
        } catch (error) {
            //toma el error que se arroja desde el backend
            setErrors(error.response.data.error)

        }
    }
    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        setIsAuth(false)
    }

    // evitar el cierre de la app si es que recarga la pagina
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()
            // console.log(cookies);
            if(!cookies.token) {
                setUser(null)
                setLoading(false)
                return setIsAuth(false)
            }
            
            try {
                const res = await verifyTokenRequest(cookies.token)
                console.log(res);
                if(!res.data) {
                    setIsAuth(false)
                    setLoading(false)
                    return;
                }

                setLoading(false)
                setUser(res.data)
                setIsAuth(true)
                
            } catch (error) {
                setLoading(false)
                setIsAuth(false)
                setUser(null)
            }
            // console.log(cookies.token);
            
        }
        checkLogin()
    },[])

    return (
        <AuthContext.Provider 
        value={{
            user,
            singin,
            logout,
            isAuth,
            loading,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}