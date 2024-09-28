import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/login/Login'
import Cadastro from './Pages/cadastro/Cadastro';
import Principal from './Pages/Principal/Principal';
function App() {

  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />    {/* Rota para a página inicial */}
          <Route path="/cadastro" element={<Cadastro/>} />    {/* Rota para a página inicial */}
          <Route path="/home" element={<Principal/>} />    {/* Rota para a página inicial */}


        </Routes>
    </Router>
    </div>
  )
}

export default App
