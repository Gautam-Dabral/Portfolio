import React from 'react'
import { useNavigate } from 'react-router-dom';
import samuraiImage from '../assets/samurai-.jpg';
import pipes from '../assets/pipes.jpg';
import car from '../assets/car.jpg';


const Home = () => {
  const navigate = useNavigate();

  const toCharacterStats = () => {
    navigate('character-stats');
  }

  return (
    <div className='w-full h-full bg-black flex flex-col justify-center items-center relative overflow-hidden p-10'>
      <div className='absolute inset-0 z-0'>
        <img src={samuraiImage} alt="samurai" className='w-full h-full object-cover opacity-100' />
      </div>
      <div className='absolute inset-0 z-0'>
        <img src={pipes} alt='grid' className='w-full h-full object-cover opacity-50 mix-blend-overlay' />
      </div>
      <div className='absolute inset-0 z-0'>
        <img src={car} alt='texture' className='w-full h-full object-cover opacity-50 mix-blend-multiply'/>
      </div>
      <div className='z-10 text-center relative'>
        <h1 className='text-5xl md:text-6xl font-extrabold text-white tracking-widest uppercase mb-8 drop-shadow-lg'>
          Welcome To <br /> My Portfolio
        </h1>

        <button
          className='cursor-pointer text-white bg-red-700 hover:bg-red-600 transition-all px-8 py-3 text-lg font-bold tracking-widest clip-path-slant border border-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
          onClick={toCharacterStats}
        >
          START EXPLORING
        </button>
      </div>
    </div>
  )
}

export default Home