import './new.css'

import { useState, useEffect, useContext } from 'react';

import Title from '../../components/Title'
import Header from "../../components/Header";
import { FiPlusCircle } from 'react-icons/fi';

import { AuthContext } from '../../contexts/auth'

import { db } from '../../services/firebaseConnection'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const listRef = collection(db, "customers");

export default function New(){

    const { user } = useContext(AuthContext)
    
    const [customers, setCustomers] = useState([])
    const [loadCustomer, setLoadCustomer] = useState(true)
    const [customerSelected, setCustomerSelected] = useState(0)

    const [complemtento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState('Suporte')
    const [status, setStatus] = useState('Aberto')

    useEffect(() => {
        async function loadCustomers(){
            const querySnapshot = await getDocs(listRef)
            .then((snapshopt) => {
                let lista = [];
              
                snapshopt.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        nomeFantasia: doc.data().nomeFantasia
                    })
                })
                if(snapshopt.docs.size === 0){
                    console.log("Nenhum cliente encontrado")
                    setCustomers([ {id: '1', nomeFantasia: 'FREELA'} ])
                    setLoadCustomer(false)
                    return;
                }

                setCustomers(lista);
                setLoadCustomer(false);

            })
            .catch((error) => {
                console.log("Erro ao buscar os clientes", error)
                setLoadCustomer(false)
                setCustomers([ {id: '1', nomeFantasia: 'FREELA'} ])
            })
        }

        loadCustomers();
    }, [])

    function handleOptionChange(e){
        setStatus(e.target.value)
    }

    function handleChangeSelect(e){
        setAssunto(e.target.value)
    }

    function handlChangeCustomer(e){
        setCustomerSelected(e.target.value)
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
                        {
                            loadCustomer ? (
                                <input type='text' disabled={true}
                                value="Carregando..."/>
                            ) : (
                                <select value={customerSelected} onChange={handlChangeCustomer}>
                                    {customers?.map((item, index) => {
                                        return(
                                            <option key={index} value={index}>
                                                {item.nomeFantasia}
                                            </option>
                                        )
                                    })}
                                </select>
                            )
                        }

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
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