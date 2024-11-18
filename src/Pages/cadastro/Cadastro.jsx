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
                <img src={logo} alt='logo talk action' className={style.img}/>
            </section>
        </div>
    )
    
}

export default Cadastro
