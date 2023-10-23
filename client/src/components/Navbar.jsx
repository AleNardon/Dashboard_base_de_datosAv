import { Link } from "react-router-dom"
import { useAuth } from "../context/authContext"


function Navbar() {
    const {isAuth,logout} = useAuth()

    if (isAuth){
        return(
            <div>
                <nav>
                    <ul>
                        <li><Link to="/inicio">Inicio</Link></li>
                        <li><Link to="/alumnos">Alumnos</Link></li>
                        <li><Link to="/pagos">Pagos</Link></li>
                        <li><Link to="/planes">Planes</Link></li>
                        <li><Link to="/" onClick={()=>{logout()}}>Logout</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
    return
}

export default Navbar