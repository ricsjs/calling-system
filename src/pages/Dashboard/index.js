import './dashboard.css'

import Title from '../../components/Title'

import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

import Header from "../../components/Header";

import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }
    return(
        <div>
            <Header/>
            <div className="content">
                <Title name='Chamados'>
                    <FiMessageSquare size={25} />
                </Title>

                <>
                    <Link className='new' to='/new'>
                        <FiPlus size={25} color='#FFF'/>
                        Novo chamado 
                    </Link>
                    
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>Cliente</th>
                                <th scope='col'>Assunto</th>
                                <th scope='col'>Status</th>
                                <th scope='col'>Cadastrado em</th>
                                <th scope='col'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Cliente">Mercado</td>
                                <td data-label="Assunto">Suporte</td>
                                <td data-label="Status">Em aberto</td>
                                <td data-label="Cadastrado">04/05/2023</td>
                                <td data-label="#">
                                    <button className='action' style={{ backgroundColor: '#3583F6' }}>
                                        <FiSearch color='#FFF' size={17}/>
                                    </button>
                                    <button className='action' style={{ backgroundColor: '#F6A935' }}>
                                        <FiEdit2 size={17} color='#FFF'/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    
                    

                </>

            </div>
        </div>
    )
}