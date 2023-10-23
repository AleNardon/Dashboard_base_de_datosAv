
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



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
    <div>

        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email", {required: true})}  />
            {errors.email && <span>Este campo es requerido</span>}
            <label htmlFor="password">Password</label>
            <input type="password" {...register("password", {required:true})}  />
            {errors.password && <span>Este campo es requerido</span>}
            {LogErrors && <span>{LogErrors}</span>}
            <button type="submit">Login</button>
        </form>
    </div>
  )
} 

export default LoginPage