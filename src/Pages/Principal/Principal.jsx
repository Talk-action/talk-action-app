import { useContext } from 'react'
import { AplicacaoContext } from '../../context/AplicaçãoProvider'
import Header from '../header/Header'
import style from '../Principal/Principal.module.css'
import wallpaper from '../../assets/alfabeto.avif'
import coracao from '../../assets/coracao.png'
import { Link } from 'react-router-dom'


function Principal(){
    const {vidas} = useContext(AplicacaoContext)

    return(
        <div>
            <Header/>
            <section className={style.containerUser}>
                <div className={style.circulo}></div>
                <div><p>Nome de usuario</p></div>
                <div><p>Vidas</p></div>
            </section>


            <section className={style.containerAlfabeto}>
                
                <p>Alfabeto</p>
                <div className={style.alfabeto}>
                    <Link to='/alfabeto'>
                        
                        <div className={style.letras}>
                            <img className={style.img} src={wallpaper}/>
                            <p>Letras</p>
                        </div>
                    </Link>
                    

                    <div className={style.letras}>
                        <img className={style.coracao} src={coracao}/>
                        <p>{vidas}/5</p>
                    </div>
                </div>

                <div className={style.alfabeto}>


                </div>

                <div className={style.alfabeto}>


                </div>

                <div className={style.alfabeto}>
                    <img/>

                </div>
            </section>

        </div>
    )
}

export default Principal