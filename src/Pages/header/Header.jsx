import style from '../header/Header.module.css'
import logo from '../../assets/logo.png'


function Header(){

    return(
        <div className={style.container}>
            <div>
                <img className={style.img} src={logo}/>
            </div>
            <div className={style.navigate}>
                <p>Home</p>
                <p>Progresso</p>
                <p>Configuração</p>


            </div>
        </div>
    )
}

export default Header