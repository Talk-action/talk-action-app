// CampoDeTexto.js
import React, { useContext } from 'react';
import style from '../Pages/styles/Aplicacao.module.css';
import {AplicacaoContext} from '../context/AplicaçãoProvider'

import { useEffect } from 'react';

function CampoDeTexto({ handlePalavra, palavraDigitada, validaPalavra }) {
  const { progresso, campoTexto, setCampoTexto, setPalavraDigitada } = useContext(AplicacaoContext);

  const handleClick = () => {
    validaPalavra(); // Chama a função de validação
    progresso(16.6); // Chama a função progresso
    // setCampoTexto(false); // Altera o valor de campoTexto para false
    setPalavraDigitada(" ");

    console.log("OIIIIIII")
    
  };

  return (
    <div className={style.containerInput}>
      <h2>Digite a palavra correta</h2>
      <input className={style.input} type="text" onChange={handlePalavra} value={palavraDigitada} />
      <div>
        <button className={style.button} onClick={() => handleClick()}>Validar</button>
      </div>
    </div>
  );
}

export default CampoDeTexto;

