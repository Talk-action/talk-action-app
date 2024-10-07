import React, { useEffect, useState } from 'react';
import ProgressCircle from '../components/ProgressCircle';
import Header from '../Pages/header/Header';
import style from '../components/ProgressCircle.module.css'

const Progresso = () => {

  const progresso = localStorage.getItem("progresso")
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
