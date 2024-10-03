import { useContext } from 'react';
import { AplicacaoContext } from '../../context/AplicaçãoProvider';
import Header from '../header/Header';
import style from '../Principal/Principal.module.css';
import wallpaper from '../../assets/alfabeto.avif';
import att from '../../assets/att.png';
import coracao from '../../assets/coracao.png';
import { Link, useNavigate } from 'react-router-dom';

function Principal() {
    const { vidas } = useContext(AplicacaoContext);

    const navigate = useNavigate()

    const handleSelect = (e) =>{
        if(e.target.value){
            navigate(e.target.value)
        }
    }

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
                    <select className={style.select}  onChange={handleSelect}>
                        <option value="" disabled selected>Escolha uma opção</option>
                        <option value="/objetos">Objeto 1</option>
                        <option value="/objetos/2">Objeto 2</option>
                        <option value="/objetos/3">Objeto 3</option>
                    </select>

                    <select className={style.select}  onChange={handleSelect}>
                        <option value="" disabled selected>Escolha uma opção</option>
                        <option value="/profissao">Profissao 1</option>
                        <option value="/profissao/2">Profissao 2</option>
                        <option value="/profissao/3">Profissao 3</option>
                    </select>
                </div>
            </section>
        </div>
    );
}

export default Principal;
