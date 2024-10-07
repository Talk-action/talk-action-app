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
        }else{
            alert("Email ou senha incorreto")
        }


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
                <img src={"https://s3-alpha-sig.figma.com/img/a288/d23c/5fbd875768a7655114ddca093d3eb9d2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDHJ7DrUIbGatqNaD3fU6p-r7eELXm-Q1y~~z6Nn6mPkIXeohL~szVWECyKxunJ564hioolxMg5DxCQ~cF6H68e5t1ekzx0onThwPkbt1PjM2eCCvM0gZfOvDxdS2AIX0ehEvUdedkMskJm32g0TaCPTsjUVUnxJmsbjcDgHo1i0parPdDlv6V54hc8mhTFbLyXNHu3JTh0AY97tu6uPzZLTDGH2~EGzyUERENX1IFP6dv-8OmbuTf0PoYK~JjmWMmv4Qo2dTwA3iwfQoro4Y76Bjc2WQfh63PrOe7ZkaMWjMdTrS9Xex0xmNpxEVrsWyQd80R7tcPwPkuUFJJzViA__"} className={style.imagem}/>
            </section>


            
        </div>
    )
}


export default Login
