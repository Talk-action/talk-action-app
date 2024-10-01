import { useContext } from 'react';
import { AplicacaoContext } from '../../context/AplicaçãoProvider';
import Header from '../header/Header';
import style from '../Principal/Principal.module.css';
import wallpaper from '../../assets/alfabeto.avif';
import att from '../../assets/att.png';
import coracao from '../../assets/coracao.png';
import { Link } from 'react-router-dom';

function Principal() {
    const { vidas } = useContext(AplicacaoContext);

    return (
        <div>
            <Header />
            <section className={style.containerUser}>
                <div className={style.circulo}></div>
                <div><p>Nome de usuario</p></div>
                <div><p>Vidas: {vidas}</p></div>
            </section>

            <section className={style.containerAlfabeto}>
                <p>Alfabeto</p>
                <div className={style.alfabeto}>
                    <Link className={style.link} to='/alfabeto'>            
                        <div className={style.letras}>
                            <img className={style.img} src={wallpaper} alt="Alfabeto" />
                            <p>Letras</p>
                        </div>
                    </Link>

                    <div className={style.letras}>
                        <img className={style.coracao} src={coracao} alt="Coração" />
                        <p>{vidas}/5</p>
                    </div>
                </div>

                <p>Lições</p>

                <div className={style.teste1}>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed ${style.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Objetos
                                </button>
                            </h2>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <Link className={style.link} to='/objetos'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Objeto 1 - {vidas}/5</p>
                                </div>
                            </Link>
                            <Link className={style.link} to='/objetos/2'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Objeto 2 - {vidas}/5</p>
                                </div>
                            </Link>
                            <Link className={style.link} to='/objetos'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Objeto  - {vidas}/5</p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>

                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className={`accordion-button collapsed ${style.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Profissão
                                </button>
                            </h2>

                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <Link className={style.link} to='/profissao'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Profissao 1 - {vidas}/5</p>
                                </div>
                            </Link>
                            <Link className={style.link} to='/profissao/2'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Profissao 2 - {vidas}/5</p>
                                </div>
                            </Link>
                            <Link className={style.link} to='/profissao/3'> 
                                <div className={`accordion-body ${style.accordionBody}`}>
                                    <p>Profissao  - {vidas}/5</p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Principal;
