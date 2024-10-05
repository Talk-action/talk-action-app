// PalavraEmbaralhada.js
import React from 'react';
import style from '../Pages/styles/Aplicacao.module.css';

function PalavraEmbaralhada({ letras, handleLetra }) {
  return (
    <div className={style.containerResp}>
      <h1>Resposta</h1>
      {letras.map((letra, index) => (
        <p key={index} className={style.resposta} onClick={() => handleLetra(letra)}>
          {letra}
        </p>
      ))}
    </div>
  );
}

export default PalavraEmbaralhada;
