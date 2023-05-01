import './signin.css'

import { useState, useContext } from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const { signIn } = useContext(AuthContext)

    function handleSignIn(e){
        e.preventDefault();

        if(email !== '' && password !== ''){
            signIn(email, password);
        }
    }

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='logo' />
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Fazer Login</h1>
                    <input type='text'
                    placeholder='email@email.com'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value) }/>

                    <input type='password'
                    placeholder='******'
                    value={password}
                    onChange={ (e) => setpassword(e.target.value) }/>
                
                    <button type='submit'>Acessar</button>
                </form>
                
                <Link to='/register'>Criar uma conta</Link>

            </div>
        </div>
    )
}