import style from '../cadastro/cadastro.module.css'
import logo from '../../assets/logo.png'


function cadastro () {
    return(
        <div className={style.container}>
            <section className={style.cadastro}>
            
                <div className={style.cadastroName}>

                    <p className={style.p}>Cadastre-se</p>
                </div>   
                <div className={style.containercadastro}> 
                    <div>
                        <div className={style.containercadastro}>
                        <form className={style.buttonForms}>
                            <input className={style.input} type='email' placeholder='Email' required/>
                            <input className={style.input} type='password' placeholder='Senha' required/>
                            <input className={style.input} type='password' placeholder='Repita a senha' required />
                        
                            <button className={style.button}>Criar</button>
                        </form>

                            <div className={style.containerRegistro}>
                                <div className={style.border}></div>

                                

                                <div className={style.border}></div>

                            
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


export default cadastro
