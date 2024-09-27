import style from '../login/Login.module.css'
import logo from '../../assets/logo.png'
import gmail from '../../assets/gmail.jpg'
import facebook from '../../assets/facebook-13.png'
import insta from '../../assets/insta.png'
import { Link } from 'react-router-dom'


function Login () {

    return(
        <div className={style.container}>
            <section className={style.login}>
            
                <div className={style.loginName}>

                    <p className={style.p}>Login</p>
                </div>   
                <div className={style.containerLogin}> 
                    <div>
                        <div className={style.containerLogin}>
                        <form className={style.buttonForms}>
                            <input className={style.input} type='email' placeholder='Email' required/>
                            <input className={style.input} type='password' placeholder='Senha' required/>
                        
                            <button className={style.button}>Entrar</button>
                        </form>
                            <Link to={'/cadastro'}>
                                <p>Não tem conta?<strong> Cadastre-se</strong></p>
                            </Link>
                            <div className={style.containerRegistro}>
                                <div className={style.border}></div>

                                <p>ou</p>

                                <div className={style.border}></div>

                            
                            </div>
                            <div className={style.containerImg}>
                                    <img className={style.img} src={gmail}/>

                                    <img className={style.img} src={insta}/>

                                    <img className={style.img}src={facebook}/>
                            </div> 
                        </div>
                    </div>

                    
            </div>


            </section>

            <section className={style.logo}>
                <img src={logo} className={style.imagem}/>
            </section>
        </div>
    )
}


export default Login
