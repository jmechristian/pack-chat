import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { openPostForm } from '../../store/chat/chatSlice';

const Footer = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full sticky bottom-0 h-20 z-10 bg-dark'>
      <div className='flex justify-center h-full items-center border-t border-highlight'>
        <button
          className='w-10 h-10 bg-orange-600 flex justify-center items-center rounded-full'
          onClick={() => dispatch(openPostForm())}
        >
          <PlusIcon className='w-7 h-7 stroke-white' />
        </button>
      </div>
    </div>
  );
};

export default Footer;
