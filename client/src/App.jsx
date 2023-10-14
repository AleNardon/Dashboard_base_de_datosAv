import {BrowserRouter , Routes, Route} from 'react-router-dom';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Login</h1> }/>
      <Route path="/dashboard" element={<h1>Dashboard</h1> }/>
    </Routes>
  </BrowserRouter>
    );
}
export default App;
