// LetrasImagens.js
import React from 'react';
import data from '../data/letras';
import style from '../Pages/styles/Aplicacao.module.css';

function LetrasImagens({ letraAtual }) {

  console.log(letraAtual)
  return (
   
    <div className={style.letter}>
      {data.map((item) => {
        if (letraAtual.toUpperCase() === item.letra) {
          return <img className={style.img} key={item.letra} src={item.link} alt={`Imagem da letra ${item.letra}`} />;
        }
        return null;
      })}
    </div>

    

  );
}

export default LetrasImagens;
