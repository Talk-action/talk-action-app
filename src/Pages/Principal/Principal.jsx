import { useContext } from 'react';
import { AplicacaoContext } from '../../context/AplicaçãoProvider';
import Header from '../header/Header';
import style from '../Principal/Principal.module.css';
import wallpaper from '../../assets/alfabeto.avif';
import coracao from  '../../assets/coracao.png'
import { Link, useNavigate } from 'react-router-dom';

function Principal() {
    const { vidas } = useContext(AplicacaoContext);

    const navigate = useNavigate()

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
           
            // A variavel state, armazena a palavra passada no parametro, para ser usada no locale dentro dos componentes em que for chamado
            navigate(selectedValue.split(" ")[0] , {state : {teste1 : selectedValue.split(" ")[2]}});  // Navega para a URL selecionada
            
        }
    };

    return (
        <div>
            <Header />
            <section className={style.containerUser}>
                <div className={style.circulo}></div>
                <div><p>Joao Talk</p></div>
                <div><p>Vidas: {vidas}</p></div>
            </section>

            <section className={style.containerAlfabeto}>
            <Link className={style.link} to='/alfabeto'>            
                <p>Alfabeto</p>
                <div className={style.alfabeto}>
                        <div className={style.letras}>
                            <img className={style.img} src={wallpaper} alt="Alfabeto" />
                            <p>Letras</p>
                        </div>
                        
                    <div className={style.letras}>
                        <img className={style.coracao} src={coracao} alt="Coração" />
                        <p>{vidas}/5</p>
                    </div>
                </div>
            </Link>
                <p>Lições</p>
                
                <div className={style.teste1}>
                    <select className={style.select}  onChange={handleSelectChange}>
                        <option value="" disabled selected>Escolha uma opção</option>
                        {/*COMEÇO A PASSAR 2 PARAMETROS NO SELECT, O PRIMEIRO A ROTA A SER SEGUIDA E O SEGUNDO A PALAVRA A SER USADA PARA CRIAR O JOGO*/}
                        <option value="/objetos , CELULAR" >Objeto 1</option>
                        <option value="/objetos/2 , BOLA">Objeto 2</option>
                        <option value="/objetos , XICARA">Objeto 3</option>
                    </select>

                    <select className={style.select}  onChange={handleSelectChange}>
                        <option value="" disabled selected>Escolha uma opção</option>
                        <option value="/profissao , MEDICO">Profissao 1</option>
                        <option value="/profissao , PROFESSOR">Profissao 2</option>
                        <option value="/profissao , BARBEIRO">Profissao 3</option>
                    </select>
                </div>


                
            </section>
        </div>
    );
}




export default Principal;
