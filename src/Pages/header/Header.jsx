import { Link } from 'react-router-dom'
import style from '../header/Header.module.css'
import logo from '../../assets/logo.png'



function Header(){

    return(
        <div className={style.container}>
            <div>
                <Link className={style.link} to={'/home'}>
                <img  className={style.img} src={logo}/>
                </Link>
                
            </div>
            <div className={style.navigate}>
                <Link className={style.link}to={'/home'}> <p>Home</p> </Link>
                <Link className={style.link} to={'/progresso'}> <p>Progresso</p> </Link>
                <Link className={style.link} to={'/'}>  <p>Configuração</p>
                </Link>
            

            </div>
        </div>
    )
}

export default Header
