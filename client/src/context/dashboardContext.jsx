import { createContext, useContext, useState } from "react";
import { getAlumnosRequest, getPagosRequest, getPlanesRequest,getPagosAluRequest, getAlumnosIdRequest,getInicioInfoRequest } from "../api/dashboard";


const DashboardContext = createContext();

export const useDashboard = () => {
 
    const context = useContext(DashboardContext);
 
    if (!context) {
        throw new Error("useDashboard must be used within a DashboardProvider");
    }
    return context;
}

export const DashboardProvider = ({ children }) => {
    const [pagos, setPagos] = useState([]);
    const [alupago, setAlupago] = useState([]);
    const [alumnos, setAlumnos] = useState([]);
    const [planes, setPlanes] = useState([]);
    const [inicio, setInicio] = useState(null);

    const getPagos = async (param) => {
        try {
            if (param) {
                const res = await getPagosAluRequest(param);
                const alu = await getAlumnosIdRequest(param);
                setAlupago(alu.data[0].nombre_apellido);
                setPagos(res.data);
            } else {    
                const res = await getPagosRequest()
                setPagos(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }   
    const getAlumnos = async () => {
        try {
            const res = await getAlumnosRequest();
            setAlumnos(res.data);
        } catch (error) {
            console.log(error);
        }
    }   
    const getPlanes = async () => {
        try {
            const res = await getPlanesRequest();
            setPlanes(res.data);
        } catch (error) {
            console.log(error);
        }
    }   
    const getInicio = async () => {
        try {
            const res = await getInicioInfoRequest();
            setInicio(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }   


    return (
        <DashboardContext.Provider
            value={{
                pagos,
                getPagos,
                alumnos,
                getAlumnos,
                planes,
                getPlanes,
                alupago,
                inicio,
                getInicio
            }}
            >
            {children}
        </DashboardContext.Provider>
    )
}