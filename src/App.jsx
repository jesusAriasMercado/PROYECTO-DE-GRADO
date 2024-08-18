import React, { useEffect, useState } from 'react';
import logo from './assets/github-6980894_1280.png';
import marca from './assets/3m-0151c2fda0ce.png'
import marca1 from './assets/pg.png'
import marca2 from './assets/telus.png'
import marca3 from './assets/sap.png'
import marca4 from './assets/mercedes.png'
import marca5 from './assets/kpmg.png'
import imagen from './assets/visual.png'
import circulo from './assets/registro.png'
import pt from './assets/regreso (1).png'
import ptr from './assets/maletin.png'
import { useNavigate } from 'react-router-dom';
const App = () => { 
  const lista = ['Product', 'Solutions', 'Resources', 'Open Source', 'Enterprise', 'Princing'];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <div className='bg-[#0D1117] text-white absolute'>
      <div className='flex gap-[280px]'>
        <div className='flex gap-3'>
          <img className='w-12 ml-6' src={logo} alt="" />
          {lista.map((lista) => (
            <button
              key={lista}
              className='text-white px-4 py-2 rounded hover:bg-gray-700'>
              {lista}
            </button>
          ))}
        </div>
        <div className='flex gap-10'>
          <div className="pt-3">
            <input type="text" className="bg-[#293141] pr-20 border border-gray-300 rounded-md w-[300px]" placeholder="Search or jump to..." />
          </div>
          <div className='flex gap-8'>
            <div>
              <button className='text-white pt-3' onClick={goToLogin}>Sing in</button>
            </div>
            <button className='text-white pt-0 ' onClick={goToRegister}>Sing up</button>
          </div>
        </div>
      </div>
      <div className='absolute'>
        <div className='relative pt-[150px] pl-[149px]'>
          <img className='w-[14px]' src={circulo} alt="" />
        </div>
        <div className='relavtive pt-[6px] pl-[154px]'>
          <div className='w-[4px] h-[220px] rounded-xl' style={{ background: 'linear-gradient(to bottom, rgba(124, 114, 255, 0), #7C72FF)' }}></div>
        </div>
        <div className='relative pl-[147px] pt-[20px] '>
          <img className='w-[23px] img ' src={pt} alt="" />
        </div>
        <div className='pl-[154px] pt-[22px]'>
          <div className='w-[4px] h-[260px] rounded-xl img-hover' style={{ background: 'linear-gradient(#7C72FF, #36AE4F)' }}></div>
        </div>
        <div className='relavtive pt-[30px] pl-[145px]'>
          <img className='w-[23px]' src={ptr} alt="" />
        </div>
        <div className='relavtive pt-[30px] pl-[154px]'>
          <div className='w-[4px] h-[320px] rounded-xl' style={{ background: 'linear-gradient(to bottom, #36AE4F, rgba(54, 174, 79, 0))' }}></div>
        </div>
      </div>
      <div className='pt-[150px] pl-[220px]'>
        <h1 className='text-8xl font-semibold'>Let’s build from here</h1>
        <br />
        <h2 className='text-2xl text-gray-500'>The world’s leading AI-powered developer platform.</h2>
        <br />
        <br />
        <div className='flex gap-5 pt-[50px]'>
          <div>
            <input className='pr-[100px] pl-3 pt-3 pb-3 rounded-md' type="text" placeholder='Email Address' />
            <button className='bg-[#7E43C5] pl-5 pr-10 pt-3 pb-3 rounded-md font-bold'>Sing up for GitHub</button>
          </div>
          <div className="vertical-line"></div>
          <button className='border-2 border-[#7E43C5] font-semibold pl-6 pr-6 rounded-md'>Start a free enterprise trial</button>
        </div>
        <div className='pt-[80px]'>
          <h1 className='text-2xl text-gray-500'>Trusted by the world’s leading organizations </h1>
          <div className='flex gap-[100px] w-[150px] pt-[30px]'>
            <img src={marca} alt="" />
            <img src={marca5} alt="" />
            <img src={marca4} alt="" />
            <img src={marca3} alt="" />
            <img src={marca1} alt="" />
            <img src={marca2} alt="" />
          </div>
        </div>
        <div className='pt-[100px]'>
          <h1 className='text-2xl font-semibold'>Productivity</h1>
          <br />
          <h1 className='text-6xl text-[#3FB950] font-semibold'>Accelerate innovation</h1>
          <h1 className='text-5xl font-semibold'>Our AI-powered platform increases the <br /> pace of software development.</h1>
        </div>
      </div>
      <div className='pl-[100px] pt-[150px]'>
        <img className='rounded-lg w-[90%]' src={imagen} alt="" />
      </div>

    </div>
  );
};
export default App;
