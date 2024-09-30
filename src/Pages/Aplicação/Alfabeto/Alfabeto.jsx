import Header from "../../header/Header";
import style from '../Alfabeto/Alfabeto.module.css';
import data from '../../../data/letras';
import { useState } from "react";

function Alfabeto() {
    const [letraLink, setLetraLink] = useState('');
    const [selectedLetter, setSelectedLetter] = useState(''); // Estado para controlar a letra em destaque

    const hiddenImage = (item) => {
        if (letraLink === item.link) {
            setLetraLink(''); // Se a mesma letra for clicada, oculta a imagem
            setSelectedLetter(''); // Reseta a letra selecionada
        } else {
            setLetraLink(item.link); // Define o link da imagem
            setSelectedLetter(item.letra); // Define a letra em destaque
        }
    };

    return (
        <div>
            <Header />
            <div className={style.container}>
                {data.map((item) => {
                    return (
                        <div key={item.letra} className={style.containerLetra}>
                            <span
                                onClick={() => hiddenImage(item)}
                                className={`${style.span} ${selectedLetter === item.letra ? style.highlight : ''}`}
                            >
                                <p>{item.letra}</p>
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Renderiza a imagem e a camada de fundo opaco apenas se uma letra estiver selecionada */}
            {letraLink && (
                <>
                    <img
                        src={letraLink}
                        alt={`Imagem da letra ${selectedLetter}`}
                        className={style.image}
                    />
                    <div className={style.background} onClick={() => setLetraLink('')} />
                </>
            )}
        </div>
    );
}

export default Alfabeto;
