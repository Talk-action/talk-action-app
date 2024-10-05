import React, { useEffect, useState } from 'react';
import ProgressCircle from '../components/ProgressCircle';
import Header from '../Pages/header/Header';
import style from '../components/ProgressCircle.module.css'

const Progresso = () => {

  const progresso = localStorage.getItem("progresso")

  console.log(progresso)
  
  // useEffect(() => {
  //   const progressoArmazenado = localStorage.getItem("progresso");
  //   if (progressoArmazenado) {
  //     setNovoProgresso(Number(progressoArmazenado)); // Converte para número
  //   }
  // }, []); // Executa apenas na montagem do componente

  return (
    <div>
      <Header />
      <div className={style.component}>
          <p>Progresso</p>
        <ProgressCircle size={400} progress={progresso} strokeWidth={10} />
      </div>
    </div>
  );
};

export default Progresso;
