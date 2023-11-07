import axios from './axios';


export const loginRequest = user => axios.post(`/login`,user)

export const verifyTokenRequest = () => axios.get(`/verifyToken`)

