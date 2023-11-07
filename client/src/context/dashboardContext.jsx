import { createContext, useContext, useState } from "react";
import { getAlumnosRequest, getPagosRequest, getPlanesRequest } from "../api/dashboard";


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
    const [alumnos, setAlumnos] = useState([]);
    const [planes, setPlanes] = useState([]);

    const getPagos = async () => {
        try {
            const res = await getPagosRequest()
            setPagos(res.data);
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


    return (
        <DashboardContext.Provider
            value={{
                pagos,
                getPagos,
                alumnos,
                getAlumnos,
                planes,
                getPlanes,
            }}
            >
            {children}
        </DashboardContext.Provider>
    )
}