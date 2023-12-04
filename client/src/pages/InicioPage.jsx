import { useEffect } from "react";
import { useDashboard } from "../context/dashboardContext";
import "../stylesheets/InicioPage/InicioPage.css";
import { CardInit } from "../components/cardInicio";
import Loader from "../components/Loader";

function InicioPage() {
    const { getInicio, inicio } = useDashboard();

    useEffect(() => {
        getInicio();
    }, []);
    console.log(inicio);
    if (!inicio) {
        return <Loader/>
	}
    return (
        
        <div className='divInit'>
            <CardInit title="Alumnos con Plan" desde={inicio.aluConPlan.aluPlan} hasta={inicio.aluConPlan.aluTot} />
            <CardInit title="Cobrados con Plan" desde={inicio.cobConPlan.aluConSaldoCero} hasta={inicio.cobConPlan.aluPlan} />
            <CardInit title="Pago plan 4 clases" desde={inicio.cobConPlan4.totAluSinDeuda} hasta={inicio.cobConPlan4.totAluConDeuda} />
            <CardInit title="Pago plan 8 clases" desde={inicio.cobConPlan8.totAluSinDeuda} hasta={inicio.cobConPlan8.totAluConDeuda} />
        </div>
    );
}
export default InicioPage;

// <div className='divInit'>
//   <h2 className='alumnosConPlan'>
//     Alumnos con Plan
//   </h2>
//   <label htmlFor="cantidadAlumnos">35 de 100</label>
//     <progress min="0" max="100" value="35" id='cantidadAlumnos'></progress>
//   <h2 className='cobradosConPlan'>
//     Cobrados con Plan
//   </h2>
//   <label htmlFor="cantidadCobrados">70 de 100</label>
//   <progress min="0" max="100" value="70" id='cantidadCobrados'></progress>
//   <h2 className='cobradosConPlan'>
//     Alumnos con plan 4 clases
//   </h2>
//   <label htmlFor="plan4Clases">50 de 100</label>
//   <progress min="0" max="100" value="50" id='plan4Clases'></progress>
//   <h2 className='cobradosConPlan'>
//     Alumnos con plan 8 clases
//   </h2>
//   <label htmlFor="plan8Clases">30 de 100</label>
//   <progress min="0" max="100" value="30" id='plan8Clases'></progress>
// </div>
