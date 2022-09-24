import React from 'react';
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='w-full sticky top-0 z-10 bg-dark'>
      <div className='px-6 h-16 flex justify-between align-middle items-center border-b border-highlight'>
        <div>
          <Bars3Icon className='w-6 h-6 stroke-white' />
        </div>
        <div className='font-headline text-orange-500 text-xl'>PackChat</div>
        <div>
          <UserCircleIcon className='w-6 h-6 stroke-white' />
        </div>
      </div>
      <div className='px-6 h-12 flex justify-center align-middle items-center border-b border-highlight bg-gray-800'>
        <div className='text-gray-500 font-headline text-xl'>#Channel Name</div>
      </div>
    </header>
  );
};

export default Header;
