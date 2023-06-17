/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [err, setErr] = useState('');
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const user = {
            "email": email,
            "password": pwd,
        }
        await axios.post('http://localhost:8000/user/login', user)
            .then((res) => {
                const data = res.data;
                console.log(res.data);
                clearFields(e);
                navigate('/greet', { state: { name: data.name, email: user.email } })
            }).catch((error) => {
                console.log(error);
                setErr("Email does Not exists");
            })
    }
    function clearFields(e: any) {
        Array.from(e.target).forEach((e: any) => (e.value = ""));
    }
    return (
        <main>
            {err !== '' && <h2>{err}</h2>}
            <form className='App' onSubmit={handleSubmit}>
                <input type="email" name='email' id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name='password' id='password' placeholder='Password' autoComplete='true' onChange={(e) => setPwd(e.target.value)} required />
                <button type='submit'>Login</button>
            </form>
            <a onClick={()=>navigate('/')}>Register</a>
        </main>
    )
}

export default Login