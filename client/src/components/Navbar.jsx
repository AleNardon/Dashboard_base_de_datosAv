import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../context/authContext"

import '../stylesheets/normalize.css'


function Navbar() {
    const {isAuth,logout} = useAuth()

    if (isAuth){
        return(
            
                <nav className="nabvar">
                    <ul>    
                        <NavLink to="/inicio" ><li>Inicio</li></NavLink>
                        <NavLink to="/alumnos"><li>Alumnos</li></NavLink>
                        <NavLink to="/pagos"><li>Pagos</li></NavLink>
                        <NavLink to="/planes"><li>Planes</li></NavLink>
                        <Link to="/" onClick={()=>{logout()}}><li>Logout</li></Link>
                    </ul>
                </nav>

        )
    }
    return
}

export default Navbar


// className={({isActive})=>isActive? 'active':''}