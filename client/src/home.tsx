/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');


  function clearFields(e: any) {
    Array.from(e.target).forEach((e: any) => (e.value = ""));
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      "name": name,
      "email": email,
      "password": pwd,
    }
    await axios.post('http://localhost:8000/user', user)
      .then((res) => {
        console.log(res.data);
        clearFields(e);
        navigate('/login')
      }).catch((error) => {
        console.log(error);
        setErr("Email already exists");
      })


  }

  return (

    <main>
      {err !== '' && <h2>{err}</h2>}
      <form className='App' onSubmit={handleSubmit}>
        <input type="text" name='name' id='name' placeholder='Username' onChange={(e) => setName(e.target.value)} required />
        <input type="email" name='email' id='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" name='password' id='password' placeholder='Password' autoComplete='true' onChange={(e) => setPwd(e.target.value)} required />
        <button type='submit'>Register</button>
      </form>
      <a onClick={()=>navigate('/login')}>Login</a>
    </main>
  )
}

export default Home
