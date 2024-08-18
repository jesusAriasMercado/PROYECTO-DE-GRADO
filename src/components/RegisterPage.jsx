// RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Asegúrate de importar la configuración de Firebase
import logo from '../assets/icons8-github-64.png'; // Asegúrate de que esta ruta es correcta

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirige al login después del registro
    } catch (error) {
      setError(error.message);
    }
  };
  const lista = ['© 2024 GitHub, Inc.', ' Footer navigation', 'Terms', 'Privacy', 'Security', 'Status', 'Docs', 'Contact', 'Manage cookies',
    'Do not share my personal information']; 

  return (
    <div className='bg-[#040D23] text-white pt-6'>
      <div className='flex pl-[150px] gap-[900px]'>
        <img className='w-[40px]' src={logo} alt="Logo" />
        <div className='flex gap-4'>
          <h1 className='text-[#8193B2] text-base'>Already have an account?</h1> 
          <button className='pb-4' onClick={() => navigate('/login')}>Sign in</button>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center pt-10'>
        <div className='bg-[#0C162D] pl-[40px] pr-[40px] pt-[20px] pb-[20px] rounded-lg w-full max-w-md'>
          <h1 className='text-lg text-[#8193B2] text-left'>Welcome to GitHub!</h1>
          <h1 className='text-sm text-[#8193B2] text-left'>Let’s begin the adventure</h1>
          <br />
          <h1 className='text-[#01C1BC] text-left'>Enter your email*</h1>
          <input
            type="text"
            className="w-full p-2 mt-2 border-2 border-[#0969da] rounded-md focus:outline-none focus:border-[#0969da] bg-[#0C162D] text-white"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h1 className='text-[#01C1BC] text-left mt-4'>Enter your password*</h1>
          <input
            type="password"
            className="w-full p-2 mt-2 border-2 border-[#0969da] rounded-md focus:outline-none focus:border-[#0969da] bg-[#0C162D] text-white"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button 
            className='mt-4 bg-[#0969da] text-white p-2 rounded-md'
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
        <div className='pt-[80px]'>
        <p className='text-xs'>By creating an account, you agree to the <a className='text-[#0969DA]' href="">Terms of Service.</a>  For more information about GitHub's privacy practices, <br />
      see the <a className='text-[#0969DA]' href="">GitHub Privacy Statement.</a> We'll occasionally send you account-related emails.</p>
        </div>
        <div className='flex pt-[55px] pb-[54px]'>
      {lista.map((lista) => (
            <button
              key={lista}
              className='text-gray-400 px-4 py-2 rounded flex text-sm'>
              {lista}
            </button>
          ))}
      </div>
      </div>


    </div>
  );
};

export default RegisterPage;
