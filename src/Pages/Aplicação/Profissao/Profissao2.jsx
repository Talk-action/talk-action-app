import { useContext, useEffect } from "react";
import Header from "../../header/Header";
import data from '../../../data/letras';
import style from '../../Aplicação/Aplicacao.module.css';
import { AplicacaoContext } from "../../../context/AplicaçãoProvider";
import { useNavigate } from "react-router-dom";

function Profissao2({ palavraProp}) { // Recebe a palavra "Homem" como padrão
  const { letraAtual, handleLetra, campoTexto, handlePalavra, validaPalavra, palavraDigitada, setPalavra, indice , handleLoopImage } = useContext(AplicacaoContext);
  const navigate = useNavigate();

  // Define a palavra no estado global ao carregar o componente
  useEffect(() => {
    setPalavra(palavraProp); // Define a palavra "Homem" no estado do contexto
  }, [palavraProp]);


  useEffect(() => {
    if(campoTexto === true){
      handleLoopImage(palavraProp);

    }
  },  [indice]); // Adiciona 'indice' como dependência


  return (
    <div className={style.container}>
      <Header />

      <div className={style.principal}>
        <div className={style.letter}>
          <div>
            {data.map((item) => {
              if (letraAtual === item.letra) {
                return <img className={style.img} key={item.letra} src={item.link} alt={`Imagem da letra ${item.letra}`} />;
              }
              return null;
            })}
          </div>
        </div>

        <div className={`${style.containerResp} ${campoTexto === true ? style.none : style.containerResp}`}>
          <h1>Resposta</h1>
          {/* Exemplo de letras que o usuário deve clicar para avançar */}
          <p className={style.resposta} onClick={() => handleLetra('O')}>O</p>
          <p className={style.resposta} onClick={() => handleLetra('E')}>E</p>
          <p className={style.resposta} onClick={() => handleLetra('M')}>M</p>
          <p className={style.resposta} onClick={() => handleLetra('I')}>I</p>
          <p className={style.resposta} onClick={() => handleLetra('D')}>D</p>
          <p className={style.resposta} onClick={() => handleLetra('C')}>C</p>
          </div>



          <div>       
          {/* Campo de texto só aparece quando todas as letras foram mostradas */}
          {campoTexto && (
            <div>
              <h2>Digite a palavra correta</h2>
              <input type="text" onChange={handlePalavra} value={palavraDigitada} />
              <button onClick={() => validaPalavra(navigate)}>Validar</button>
            </div>
          )}
        </div>
        </div>
      </div>
  );
}

export default Profissao2;
