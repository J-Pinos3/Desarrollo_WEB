import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./paginas/LandingPage";
import Login from "./layout/Login";
import FormularioLogin from "./paginas/FormularioLogin";
import Dashboard from "./layout/Dashboard";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
                                
        <Route path="/" element={<LandingPage />}>
        </Route>

        <Route path="/login" element={<Login />}>
          <Route index element={<FormularioLogin />} />
        </Route>

        <Route path="/fundamentos" element={<Dashboard />}>
        </Route>

          
      </Routes>
    </BrowserRouter>
  )
}

export default App
