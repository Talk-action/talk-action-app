import { createContext, useState } from "react"


export const AplicacaoContext = createContext()


export const AplicaçãoProvider = ({children}) =>{

    const [vidas , setVidas] = useState(5)
    return(
    <AplicacaoContext.Provider value={{ vidas }}>
      {children}
    </AplicacaoContext.Provider>
    )
}