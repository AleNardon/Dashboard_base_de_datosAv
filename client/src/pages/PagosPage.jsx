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
      <div className="divTitle">
      <h1 >Pagos</h1>
    </div>
      <StyledEngineProvider injectFirst>
        <PagosTable data={pagos}  />
      </StyledEngineProvider>
    </StrictMode>
  )
}

export default PagosPage