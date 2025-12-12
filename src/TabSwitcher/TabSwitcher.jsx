import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

export const TabSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tab = [{ name: 'Character Stats', Link: '/character-stats' }, { name: 'Missions', Link: '/missions' }, { name: 'Achievements', Link: '/achievements' },
  {
    name: 'Gallery', Link: '/gallery'
  }];





  return (
    <div className='flex gap-2'>
      {tab.map((tab, index) => {
        
        const isActive = location.pathname === tab.Link;

        return (
          <button
            key={index}
            onClick={() => navigate(tab.Link)}

            className={`
                px-6 py-2 cursor-pointer transition-all uppercase text-sm font-semibold tracking-wide rounded-xl border-2
                ${isActive
                ? 'bg-red-800 text-white border-red-600'
                : 'bg-white text-black border-red-500 hover:bg-red-800 hover:text-white'
              }
            `}
          >
            {tab.name}
          </button>
        )
      })}
    </div>
  )
}