import Header from '../header/Header'
import style from '../Principal/Principal.module.css'




function Principal(){
     
    return(
        <div>
            <Header/>
            <div className={style.containerUser}>
                <div className={style.circulo}></div>
                <div><p>Nome de usuario</p></div>
                <div><p>Vidas</p></div>
            </div>

        </div>
    )
}

export default Principal