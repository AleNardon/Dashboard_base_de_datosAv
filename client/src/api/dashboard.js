import axios from './axios';

export const getAlumnosRequest = () => axios.get(`/alumnos`)
export const getPagosRequest = () => axios.get(`/pagos`)
export const getPlanesRequest = () => axios.get(`/planes`)
export const getPagosAluRequest = (id) => axios.get(`/pagos/${id}`)
// export const getInicio = () => axios.get(`/`)

