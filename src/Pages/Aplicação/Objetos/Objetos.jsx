import { useContext, useEffect, useState } from "react";
import Header from "../../header/Header";
import { AplicacaoContext } from "../../../context/AplicaçãoProvider";
import PalavraEmbaralhada from '../../../components/PalavraEmbaralhada';
import CampoDeTexto from '../../../components/CampoTexto';
import LetrasImagens from '../../../components/LetrasImagem';
import style from '../../styles/Aplicacao.module.css';

function Objetos({ palavraProp }) { // Recebe a palavra como padrão
  const { letraAtual, handleLetra, campoTexto, handlePalavra, validaPalavra, palavraDigitada, setPalavra, handleLoopImage, indice, progresso, setCampoTexto } = useContext(AplicacaoContext);
  const [palavraEmbaralhada, setPalavraEmbaralhada] = useState([]);

  const embaralharProps = () => {
    const nova = palavraProp.split("").sort(() => Math.random() - 0.5).join('');
    setPalavraEmbaralhada(nova.split('')); // Armazena como um array de letras
  };
  


  // Define a palavra no estado global ao carregar o componente
  useEffect(() => {
    setPalavra(palavraProp); // Define a palavra no estado do contexto
    embaralharProps();
  }, [palavraProp]);

  useEffect(() => {
    if (campoTexto === true) {
      handleLoopImage(palavraProp);
    }
  }, [indice]); // Adiciona 'indice' como dependência

  return (
    <div className={style.container}>
      <Header />
      <div className={style.principal}>
        <LetrasImagens letraAtual={letraAtual} />
        {!campoTexto && (
          <PalavraEmbaralhada letras={palavraEmbaralhada} handleLetra={handleLetra} />
        )}
        {campoTexto && (
          <CampoDeTexto handlePalavra={handlePalavra} palavraDigitada={palavraDigitada} validaPalavra={validaPalavra} />
        )}
      </div>
    </div>
  );
}

export default Objetos;
