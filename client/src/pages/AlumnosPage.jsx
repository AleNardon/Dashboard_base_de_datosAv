import { StrictMode, useEffect } from "react";
import AlumnosTable from "../components/alumnosTable"    
import { StyledEngineProvider } from '@mui/material/styles';
import '../stylesheets/normalize.css'
import '../stylesheets/AlumnosPage.css'
import { useDashboard } from "../context/dashboardContext";

function AlumnosPage() {
  const {getAlumnos,alumnos} = useDashboard();

  useEffect(() => {
    getAlumnos();
  }, []);
  return (
    <StrictMode>
    <div className="divTitle">
      <h1 >Alumnos</h1>
    </div>
      <StyledEngineProvider injectFirst>
        <AlumnosTable data={alumnos} />
      </StyledEngineProvider>
    </StrictMode>
  )
}

export default AlumnosPage