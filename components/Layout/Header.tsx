import React from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Header = ({ toggle }) => {
  const channel = useSelector((state: RootState) => state.chat.channel);

  return (
    <header className='w-full sticky top-0 z-10 bg-dark drop-shadow-lg'>
      <div className='px-6 h-20 flex justify-between align-middle items-center '>
        <button onClick={toggle}>
          <Bars3Icon className='w-6 h-6 stroke-white cursor-pointer' />
        </button>
        <div className='font-headline text-orange-500 text-xl'>PackChat</div>
        <div>
          <UserCircleIcon className='w-6 h-6 stroke-white' />
        </div>
      </div>
      <div className='px-6 h-12 flex justify-center align-middle items-center  bg-gray-800'>
        <div className='text-gray-500 font-headline text-xl'>#{channel}</div>
      </div>
    </header>
  );
};

export default Header;
