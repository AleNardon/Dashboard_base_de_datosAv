import axios from './axios';

const API = 'http://localhost:3001/api';
export const loginRequest = user => axios.post(`/login`,user)

export const verifyTokenRequest = () => axios.get(`/verifyToken`)

