import './new.css'

import { useState } from 'react';

import Title from '../../components/Title'
import Header from "../../components/Header";
import { FiPlusCircle } from 'react-icons/fi';

export default function New(){
    
    const [customers, setCustomers] = useState([])

    const [complemtento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    function handleOptionChange(e){
        setStatus(e.target.value)
    }

    return(
        <div>
            <Header />

            <div className='content'>
                <Title name='Novo chamado'>
                    <FiPlusCircle size={25}/>
                </Title>

                <div className='container'>

                    <form className='form-profile'>

                        <label>Clientes</label>
                        <select>
                            <option key={1} value={1}>Mercado</option>
                            <option key={2} value={2}>Loja</option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option selected>Selecione</option>
                            <option key={1} value='Suporte'>Suporte</option>
                            <option key={2} value='Visita técnica'>Visita Ténica</option>
                            <option key={3} value='Financeiro'>Financeiro</option>
                        </select>

                        <label>Status</label>
                        <div className='status'>
                            <input type='radio' name='radio' value='Aberto' onChange={handleOptionChange} checked={ status === 'Aberto' }/><span>Em aberto</span>
                            <input type='radio' name='radio' value='Progresso' onChange={handleOptionChange} checked={ status === 'Progresso'} /><span>Em progresso</span>
                            <input type='radio' name='radio' value='Fechado' onChange={handleOptionChange} checked={ status === 'Fechado'}/><span>Fechado</span>
                        </div>

                        <label>Complemento</label>
                        <textarea type='text' placeholder='Descrição' value={complemtento} onChange={(e) => setComplemento(e.target.value)}/>

                        <button type='Submit'>Registrar</button>
                    </form>

                </div>

            </div>
        </div>
    )
}