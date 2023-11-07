import PlanesTable from "../components/planesTable"
import { StrictMode, useEffect } from "react"; 
import { StyledEngineProvider } from '@mui/material/styles';
import { useDashboard } from "../context/dashboardContext";

function PlanesPage() {
  const {planes,getPlanes} = useDashboard();
  useEffect(() => {
    getPlanes(); 
  },[]);
  
  return (
    
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <PlanesTable data={planes} />
      </StyledEngineProvider>
    </StrictMode>
  )
}

export default PlanesPage