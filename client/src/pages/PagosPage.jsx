import PagosTable from "../components/pagosTable"
import { StrictMode, useEffect } from "react"; 
import { StyledEngineProvider } from '@mui/material/styles';
import { useDashboard } from "../context/dashboardContext";

function PagosPage() {
  const {getPagos,pagos} = useDashboard();
  useEffect(() => {
    getPagos();
  }, []);
  return (
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <PagosTable data={pagos}  />
      </StyledEngineProvider>
    </StrictMode>
  )
}

export default PagosPage