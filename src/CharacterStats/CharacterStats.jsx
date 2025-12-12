import React from 'react'

export const CharacterStats = () => {
  return (
    <div className='w-full h-full flex bg-black border-2 border-cyan-500 box-border'>
      <div className='w-1/4 bg-[#006060] border-r-2 border-black flex flex-col p-4'>
        <h3 className='text-white font-bold uppercase mb-4 tracking-wider'>Profile</h3>
        <div className='bg-[#004d4d] h-90 w-full mb-4 rounded-sm'></div>
        <div className='flex-1 bg-[#004d4d] w-full rounded-sm opacity-50'></div>
      </div>

      <div className='flex-1 bg-[#2b2b2b] border-r-2 border-black flex flex-col relative'>
         <div className='flex-1 m-0'></div>
      </div>

      <div className='w-1/4 bg-[#4a0000] flex flex-col p-4'>
        <h3 className='text-white font-bold uppercase mb-4 tracking-wider'>Tools</h3>
        <div className='flex-1 bg-[#2b0000] w-full rounded-sm opacity-50'></div>
      </div>
    </div>
  )
}