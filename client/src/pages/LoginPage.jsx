
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/loginPage/LoginPage.css';
import '../stylesheets/loginPage/buttonLoginPage.css'	;
import '../stylesheets/loginPage/inputsLoginPage.css'	;	



function LoginPage() {

    const {register, handleSubmit,formState:{ errors}} = useForm()
    const {singin, isAuth,errors:LogErrors } = useAuth()
    const navigate = useNavigate()

    //redireccionara si esta autenticado a ...
    useEffect(() => {
        if(isAuth) navigate('/inicio');

    }, [isAuth]);
    
    const onSubmit = handleSubmit(async(values)=> {
        singin(values)
    })

  return (
    <div className='bodyLogin'>
        <div className='contenedorForm'>
            <h1 className='tituloForm'>Inicio de sesión</h1>
            <form className='formLogin' onSubmit={onSubmit}>
                <div className='divLabel'>
                    <label className='labelForm' htmlFor="email">Correo electrónico</label>
                    <input className='inputForm' type="email" {...register("email", {required: true})}  />
                    {errors.email && <span className='spanLogin'>¡Este campo es requerido!</span>}
                </div>
                <div className='divLabel'>
                    <label className='labelForm' htmlFor="password">Contraseña</label>
                    <input className='inputForm' type="password" {...register("password", {required:true})}  />
                    {errors.password && <span className='spanLogin'>¡Este campo es requerido!</span>}
                    {LogErrors && <span className='spanLogin'>{LogErrors}</span>}
                </div>
                <button className='btn' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
} 

export default LoginPage