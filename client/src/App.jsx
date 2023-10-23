import {BrowserRouter , Routes, Route} from 'react-router-dom';

import LoginPage  from "./pages/LoginPage";
import InicioPage from './pages/InicioPage';
import AlumnosPage from './pages/AlumnosPage';
import PagosPage from './pages/PagosPage';
import PlanesPage from './pages/PlanesPage';
import ProtectedRoute from '../ProtectedRoute';
import { AuthProvider } from './context/authContext';
import Navbar from './components/Navbar';

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<LoginPage/> }/>      
          
          <Route element={<ProtectedRoute/>}>
            
            <Route path="/planes" element={ <PlanesPage/> }/>
            <Route path="/inicio" element={<InicioPage/>}/>
            <Route path="/alumnos" element={<AlumnosPage/> }/>
            <Route path="/pagos" element={<PagosPage/> }/>
          </Route>

      </Routes>
    </BrowserRouter>
  </AuthProvider>
    );
}
export default App;
