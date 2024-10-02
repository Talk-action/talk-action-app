import style from '../login/Login.module.css'
import logo from '../../assets/logo.png'
import gmail from '../../assets/gmail.jpg'
import facebook from '../../assets/facebook-13.png'
import insta from '../../assets/insta.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


function Login () {
    const [email , setEmail] = useState("")
    const [senha , setSenha] = useState("")
    const navigate = useNavigate()
    
    const handleSubmit = () =>{
        event.preventDefault();

        if(email === "talkaction@gmail.com" && senha === '123456'){
            navigate('/home')
        }
        
        console.log("Email" , email)
        console.log("Senha" , senha)

    }

    return(
        <div className={style.container}>
            <section className={style.login}>
            
                <div className={style.loginName}>

                    <p className={style.p}>Login</p>
                </div>   
                <div className={style.containerLogin}> 
                    <div>
                        <div className={style.containerLogin}>
                        <form onSubmit={handleSubmit}className={style.buttonForms}>
                            <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value) }
                            type='email'
                             className={style.input} placeholder='Email'/>

                            <input 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value) }
                            type='password'

                            className={style.input}placeholder='Senha'/>
                           
                            <button type='submit' className={style.button}>Entrar</button>
                        </form>
                            <Link className={style.link}to={'/cadastro'}>
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
