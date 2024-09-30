import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/login/Login'
import Cadastro from './Pages/cadastro/Cadastro';
import Principal from './Pages/Principal/Principal';
import { AplicaçãoProvider } from './context/AplicaçãoProvider';
import Alfabeto from './Pages/Aplicação/Alfabeto/Alfabeto';
function App() {

  return(
    <div>
      <Router>
        <AplicaçãoProvider>
        <Routes>
          <Route path="/" element={<Login/>} />    {/* Rota para a página inicial */}
          <Route path="/cadastro" element={<Cadastro/>} />    {/* Rota para a página inicial */}
          <Route path="/home" element={<Principal/>} />    {/* Rota para a página inicial */}

          <Route path="/alfabeto" element={<Alfabeto/>} />    {/* Rota para a página inicial */}
        </Routes>
        </AplicaçãoProvider>
        
    </Router>
    </div>
  )
}

export default App
