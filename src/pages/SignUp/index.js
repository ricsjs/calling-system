import { useState } from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function SignUp(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    //função de submit
    function handleSubmit(e){
        //prevenir que seja carregado em outra página
        e.preventDefault();

        if(name !== '' && email !== '' && password !== ''){
            alert('Fazendo cadastro')
        }else{
            alert('Preencha todos os campos!')
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='logo' />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Realizar Cadastro</h1>

                    <input type='text'
                    placeholder='seu nome'
                    value={name}
                    onChange={ (e) => setName(e.target.value) }/>

                    <input type='text'
                    placeholder='email@email.com'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }/>

                    <input type='password'
                    placeholder='******'
                    value={password}
                    onChange={ (e) => setpassword(e.target.value) }/>
                
                    <button type='submit'>Cadastrar</button>
                </form>
                
                <Link to='/'>Já possui uma conta? Faça login!</Link>

            </div>
        </div>
    )
}