import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth'

export default function Private({ children }){
    //chamando a propriedade signed
    const { signed, loading } = useContext(AuthContext);

    if(loading){
        return(
            <div>
                
            </div>
        )
    }

    //verificação se está logado ou não
    //se não estiver logado ele vai retornar para a tela de login:
    if(!signed){
        return <Navigate to='/' />
    }

    return children;

}