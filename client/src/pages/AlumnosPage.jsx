import { StrictMode } from "react";
import AlumnosTable from "../components/alumnosTable"    
import { StyledEngineProvider } from '@mui/material/styles';
function AlumnosPage() {
  return (
    <StrictMode>

      <StyledEngineProvider injectFirst>

        <AlumnosTable />
      </StyledEngineProvider>
    </StrictMode>
  )
}

export default AlumnosPage