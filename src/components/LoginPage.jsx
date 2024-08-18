// LoginPage.jsx
import React, { useState } from 'react';
import logo from '../assets/logotipo-de-github.png';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Asegúrate de que la ruta es correcta

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const lista = ['Terms', 'Privacy', 'Docs', 'Contact GitHub Support', 'Manage cookies', 'Do not share my personal information'];

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // Redirige a la página principal después del login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center pt-[40px]'>
      <div>
        <div className='pl-[60px]'>
          <img className='w-[45px]' src={logo} alt="GitHub logo" />
        </div>
        <h1 className='text-2xl'>Sign in to GitHub</h1>
      </div>
      <div className='pt-4'>
        <div className='flex flex-col items-center p-5 bg-[#F6F8FA]'>
          <div>
            <h1>Username or email address</h1>
            <input
              className='w-full pl-[80px] pt-[6px] my-2.5 border border-gray-300 rounded'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='pt-3'>
            <div className='flex gap-[100px]'>
              <h1>Password</h1>
              <h1 className='text-xs pt-[4px] text-[#0980E3]'>Forgot password?</h1>
            </div>
            <input
              className='w-full pl-[80px] pt-[6px] my-2.5 border border-gray-300 rounded'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className='pt-4'>
            <button
              className='w-full pl-[105px] pr-[105px] pt-[4px] pb-[4px] bg-[#1c8139] text-white rounded-md border-none cursor-pointer font-bold'
              onClick={handleLogin}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className='pt-4'>
          <div className='flex flex-col items-center justify-center border border-custom-gray pt-4 pb-4'>
            <a className='text-[#0969DA]'>Sign in with a passkey</a>
            <div className='flex gap-3'>
              <h1>New to GitHub?</h1> <a className='text-[#0980e3]' href="">Create an account</a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex pt-[100px]'>
        {lista.map((item, index) => (
          <button
            key={index}
            className='text-gray-400 px-4 py-2 rounded flex text-sm'
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginPage;
