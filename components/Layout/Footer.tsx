import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='w-full sticky bottom-0 h-20 z-10 bg-dark'>
      <div className='flex justify-center h-full items-center border-t border-highlight'>
        <div className='w-10 h-10 bg-orange-600 flex justify-center items-center rounded-full'>
          <PlusIcon className='w-7 h-7 stroke-white' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
