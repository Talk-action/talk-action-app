import React from 'react';
import ProgressCircle from '../components/ProgressCircle';
import Header from '../Pages/header/Header';
import { useContext } from 'react';
import { AplicacaoContext } from '../context/AplicaçãoProvider';

const Progresso = () => {
   // Valor inicial do progresso
  const {progress, testeProgresso} = useContext(AplicacaoContext)


  return (
    <div>
      <Header/>
      <ProgressCircle size={400} progress={progress} strokeWidth={10} />
      <button onClick={()=>testeProgresso(2)}>+</button>
    </div>
  );
};

export default Progresso;
