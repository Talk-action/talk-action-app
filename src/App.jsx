import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import Cadastro from './Pages/cadastro/Cadastro';
import Principal from './Pages/Principal/Principal';
import { AplicaçãoProvider } from './context/AplicaçãoProvider';
import Alfabeto from './Pages/Aplicação/Alfabeto/Alfabeto';
import Objetos from './Pages/Aplicação/Objetos/Objetos';
import Progresso from './Progresso/Progresso';
import Profissao from './Pages/Aplicação/Profissao/Profissao';

function App() {
  return (
    <div>
      <Router>
        <AplicaçãoProvider>
          <Routes>
            <Route path="/" element={<Login />} /> {/* Rota para a página inicial */}
            <Route path="/cadastro" element={<Cadastro />} /> {/* Rota para a página de cadastro */}
            <Route path="/home" element={<Principal />} /> {/* Rota para a página principal */}
            <Route path="/alfabeto" element={<Alfabeto />} /> {/* Rota para a página de alfabetos */}
            <Route path="/progresso" element={<Progresso />} /> {/* Rota para a página de alfabetos */}

            <Route path="/objetos" element={<Objetos palavraProp={'HOMEM'}/>} /> 

            <Route path="/objetos/2" element={<Objetos palavraProp={'BOLA'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/objetos/3" element={<Objetos palavraProp={'XICARA'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/profissao" element={<Profissao palavraProp={'MEDICO'}/>} /> 

            <Route path="/profissao/2" element={<Profissao palavraProp={'PROFESSOR'}/>} /> {/* Rota para a página de Profissao com prop */}

            <Route path="/profissao/3" element={<Profissao palavraProp={'BARBEIRO'}/>} /> {/* Rota para a página de objetos com prop */}

          </Routes>
        </AplicaçãoProvider>
      </Router>
    </div>
  );
}

export default App;
