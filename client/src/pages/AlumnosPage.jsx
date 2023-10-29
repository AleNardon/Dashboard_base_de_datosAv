import { StrictMode } from "react";
import AlumnosTable from "../components/alumnosTable"    
import { StyledEngineProvider } from '@mui/material/styles';
import '../stylesheets/normalize.css'
import '../stylesheets/AlumnosPage.css'

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