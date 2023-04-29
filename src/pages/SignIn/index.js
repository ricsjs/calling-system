import './signin.css'

import { useState } from 'react'

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

export default function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    return(
        <div className='container-center'>
            <div className='login'>
                <div className='login-area'>
                    <img src={logo} alt='logo' />
                </div>

                <form>
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