import style from '../cadastro/Cadastro.module.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

function Cadastro () {
    const [email , setEmail] = useState("")
    const [senha , setSenha] = useState("")
    const [repetirS , setRepetirS] = useState("")
    const [nome , setNome] = useState("")
    const [sobrenome , setSobrenome] = useState("")


    const handleSubmit = () =>{
        event.preventDefault();
        console.log("Nome" , nome)
        console.log("Sobrenome" , sobrenome)
        console.log("Email" , email)
        console.log("Senha" , senha)
        console.log("Senha" , repetirS)
        if(senha != repetirS){
            alert("Senhas nao conferem")
        }


    }


    return(
        <div className={style.container}>
            <section className={style.cadastro}>
                <div className={style.loginName}>

                    <p className={style.p}>Cadastre-se</p>
                </div>
                <div className={style.caixaCadastro}>
                    <form onSubmit={handleSubmit}className={style.form}>
                        <input 
                         value={nome}
                         onChange={(e) => setNome(e.target.value) }
                         className={style.input} placeholder='Nome'/>

                        <input 
                         value={sobrenome}
                         onChange={(e) => setSobrenome(e.target.value) }
                         className={style.input} placeholder='Sobrenome'/>


                        <input 
                         value={email}
                         onChange={(e) => setEmail(e.target.value) }
                         type='email'
                         className={style.input} placeholder='Email'/>

                        <input 
                         value={senha}
                         onChange={(e) => setSenha(e.target.value) }
                         type='password'
                         className={style.input}  placeholder='Senha'/>

                        <input 
                         value={repetirS}
                         onChange={(e) => setRepetirS(e.target.value) }
                         type='password'
                         className={style.input}  placeholder='Repetir senha'/>

                        <button className={style.button}>Criar</button>

                        <div className={style.line}>

                         </div>
                    </form>

                    
                </div>
            </section>

            <section className={style.logo}>
                <img src={"https://s3-alpha-sig.figma.com/img/a288/d23c/5fbd875768a7655114ddca093d3eb9d2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NDHJ7DrUIbGatqNaD3fU6p-r7eELXm-Q1y~~z6Nn6mPkIXeohL~szVWECyKxunJ564hioolxMg5DxCQ~cF6H68e5t1ekzx0onThwPkbt1PjM2eCCvM0gZfOvDxdS2AIX0ehEvUdedkMskJm32g0TaCPTsjUVUnxJmsbjcDgHo1i0parPdDlv6V54hc8mhTFbLyXNHu3JTh0AY97tu6uPzZLTDGH2~EGzyUERENX1IFP6dv-8OmbuTf0PoYK~JjmWMmv4Qo2dTwA3iwfQoro4Y76Bjc2WQfh63PrOe7ZkaMWjMdTrS9Xex0xmNpxEVrsWyQd80R7tcPwPkuUFJJzViA__"} alt='logo sing talk' className={style.img}/>
            </section>
        </div>
    )
    
}

export default Cadastro