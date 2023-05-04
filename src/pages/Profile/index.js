import { useContext, useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiSettings, FiUpload } from 'react-icons/fi';
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../../contexts/auth';
import { db, storage } from '../../services/firebaseConnection';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import './profile.css';

export default function Profile() {
    const { user, storageUser, setUser, logout } = useContext(AuthContext);
    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
    const [imageAvatar, setImageAvatar] = useState(null);
    const [nome, setNome] = useState(user && user.nome);
    const [email, setEmail] = useState(user && user.email);


    async function handleUpload() {
        try {
            const storageRef = ref(storage, `avatars/${user.uid}/${imageAvatar.name}`);
            await uploadBytes(storageRef, imageAvatar);
            const url = await getDownloadURL(storageRef);

            const docRef = doc(db, 'users', user.uid);
            await updateDoc(docRef, { nome, avatarUrl: url });
            const updatedUser = { ...user, nome, avatarUrl: url };
            setUser(updatedUser);
            storageUser(updatedUser);
            toast.success('Atualizado com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('Erro ao atualizar o usuário');
        }
    }


    function handleFile(e) {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                setImageAvatar(image);
                setAvatarUrl(URL.createObjectURL(image));
            } else {
                toast.error('Envie uma imagem do tipo PNG ou JPEG');
                setImageAvatar(null);
                return null;
            }
        }
    }



    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (nome === '') {
                throw new Error('Por favor, informe um nome');
            }

            if (imageAvatar === null) {
                const docRef = doc(db, 'users', user.uid);
                await updateDoc(docRef, { nome });
                const updatedUser = { ...user, nome };
                setUser(updatedUser);
                storageUser(updatedUser);
                toast.success('Atualizado com sucesso!');
            } else {
                //implementar a função handleUpload() para fazer upload de imagem no firebase
                handleUpload();
            }
        } catch (error) {
            console.error(error);
            toast.error('Erro ao atualizar o usuário');
        }
    }


    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Minha conta">
                    <FiSettings size={25} />
                </Title>

                <div className="container">

                    <form className="form-profile" onSubmit={handleSubmit}>
                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25} />
                            </span>

                            <input type="file" accept="image/*" onChange={handleFile} /> <br />
                            {avatarUrl === null ? (
                                <img src={avatar} alt="Foto de perfil" width={250} height={250} />
                            ) : (
                                <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
                            )}

                        </label>

                        <label>Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <label>Email</label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                    </form>

                </div>

                <div className="container">
                    <button className="logout-btn" onClick={() => logout()}>Sair</button>
                </div>

            </div>

        </div>
    )
}