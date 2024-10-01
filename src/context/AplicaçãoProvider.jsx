import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AplicacaoContext = createContext();

export const AplicaçãoProvider = ({ children }) => {
  const [vidas, setVidas] = useState(5);
  const [indice, setIndice] = useState(0);
  const [letraAtual, setLetraAtual] = useState('');
  const [campoTexto, setCampoTexto] = useState(false);
  const [palavraDigitada, setPalavraDigitada] = useState('');
  const [palavra, setPalavra] = useState(''); // Palavra inicial a ser usada
  const navigate = useNavigate()

  useEffect(() => {
    if (palavra && indice < palavra.length) {
      const letra = palavra[indice];
      setLetraAtual(letra); // Define a letra atual com base no índice
    } else if (palavra && indice >= palavra.length) {
      setLetraAtual(''); // Quando todas as letras forem exibidas, reseta a letra
      setCampoTexto(true); // Exibe o campo de texto somente quando todas as letras foram mostradas
    }
  }, [indice, palavra]);

  const handlePalavra = (e) => {
    setPalavraDigitada(e.target.value);
  };

  const validaPalavra = (navigate) => {
    if (palavraDigitada.toUpperCase() === palavra.toUpperCase()) {
      alert("Parabéns, palavra correta! Continue com os estudos.");
      navigate("/home");
      window.location.reload()
    } else {
      alert("Não foi dessa vez, tente novamente.");
      navigate("/home");
      window.location.reload()
    }
  };

  const handleLetra = (letra) => {
    if (letra === letraAtual) {
      setIndice(indice + 1); // Avança para a próxima letra
      alert("Letra Correta")
    } else {
      setVidas(vidas - 1);
      alert("Letra incorreta. Escolha outra")
      if (vidas === 0) {
        navigate("/home");
        objeto.reload(forcedReload)
      }
    }
  };

  return (
    <AplicacaoContext.Provider
      value={{
        vidas,
        setVidas,
        indice,
        setIndice,
        letraAtual,
        campoTexto,
        palavraDigitada,
        palavra,
        setPalavra,
        handlePalavra,
        validaPalavra,
        handleLetra,
      }}
    >
      {children}
    </AplicacaoContext.Provider>
  );
};
