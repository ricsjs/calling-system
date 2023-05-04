import { useContext, useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'


import { FiSettings, FiUpload } from 'react-icons/fi'
import avatar from '../../assets/avatar.png'

import { AuthContext } from '../../contexts/auth'

import './profile.css'
import { toast } from 'react-toastify'


export default function Profile(){

    const { user, storageUser, setUser, logout } = useContext(AuthContext);

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)
    const [nome, setNome] = useState(user && user.nome)
    const [email, setEmail] = useState(user && user.email)
    const [imageAvatar, setImageAvatar] = useState(null)

    function handleFile(e){
        if(e.target.files[0]){
            const image = e.target.files[0];

            if(image.type === 'image/jpeg' || image.type === 'image/png'){
                setImageAvatar(image)
                setAvatarUrl(URL.createObjectURL(image))
            }else{
                toast.error("Envie uma imagem do tipo PNG ou JPEG")
            }
        }
    }

    return(
        <div>
            <Header/>
            <div className='content'>
                <Title name="Meu perfil">
                    <FiSettings size={25}/>
                </Title>
                
                <div className='container'>
                    
                    <form className='form-profile'>

                        <label className='label-avatar'>
                            <span>
                                <FiUpload color='#FFF' size={25}/>
                            </span>

                            <input type='file' accept='image/*' onChange={handleFile}/><br/>
                            {avatarUrl === null ?(
                                <img src={avatar} alt='Foto de perfil' width={250} height={250}/>
                            ) : (
                                <img src={avatarUrl} alt='Foto de perfil' width={250} height={250}/>
                            )}
                        </label>

                        <label>Nome</label>
                        <input type='text' placeholder={user.nome} onChange={ (e) => setNome(e.target.value) }/>

                        <label>E-mail</label>
                        <input type='text' value={user.email} disabled={true}/>

                        <button type='submit'>Salvar</button>
                    </form>

                </div>

                <div className='container'>
                    <button onClick={() => logout()} className='logout-btn'>Sair</button>
                </div>

            </div>
        </div>
    )
}