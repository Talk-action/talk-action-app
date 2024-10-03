import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import Cadastro from './Pages/cadastro/Cadastro';
import Principal from './Pages/Principal/Principal';
import { AplicaçãoProvider } from './context/AplicaçãoProvider';
import Alfabeto from './Pages/Aplicação/Alfabeto/Alfabeto';
import Objetos from './Pages/Aplicação/Objetos/Objetos';
import Objetos2 from './Pages/Aplicação/Objetos/Objetos2';
import Objetos3 from './Pages/Aplicação/Objetos/Objetos3';
import Profissao from './Pages/Aplicação/Profissao/Profissao';
import Profissao2 from './Pages/Aplicação/Profissao/Profissao2';
import Profissao3 from './Pages/Aplicação/Profissao/Profissao3';
import Progresso from './Progresso/Progresso';

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

            <Route path="/objetos" element={<Objetos palavraProp={'HOMEM'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/objetos/2" element={<Objetos2 palavraProp={'BOLA'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/objetos/3" element={<Objetos3 palavraProp={'XICARA'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/profissao" element={<Profissao palavraProp={'PROFESSOR'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/profissao/2" element={<Profissao2 palavraProp={'MEDICO'}/>} /> {/* Rota para a página de objetos com prop */}

            <Route path="/profissao/3" element={<Profissao3 palavraProp={'FISICO'}/>} /> {/* Rota para a página de objetos com prop */}

          </Routes>
        </AplicaçãoProvider>
      </Router>
    </div>
  );
}

export default App;
