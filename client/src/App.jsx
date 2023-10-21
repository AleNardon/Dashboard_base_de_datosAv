import {BrowserRouter , Routes, Route} from 'react-router-dom';

import LoginPage  from "./pages/Login";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Login</h1> }/>
      <Route path="/dashboard" element={<h1>Dashboard</h1> }/>
      <Route path="/login" element={<LoginPage/> }/>
    </Routes>
  </BrowserRouter>
    );
}
export default App;
