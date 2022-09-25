import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const MobileMenu = ({ isOpen, close }) => {
  const variants = {
    open: {
      clipPath: 'circle(141% at 0 0)',
      transition: {
        duration: 0.4,
      },
    },
    closed: {
      clipPath: 'circle(0% at 0 0)',
    },
  };

  return (
    <motion.div
      className='w-full h-screen fixed z-50 top-0 left-0 bottom-0'
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <motion.div className='bg-dark w-full z-50 flex flex-col overflow-scroll h-screen'>
        <div className='pt-7 px-7 pb-10 flex flex-col w-full'>
          <div className='flex w-full justify-between align-middle '>
            <div className='font-bold font-plex text-3xl text-orange-600 ml-4'>
              Logo
            </div>
            <button onClick={close}>
              <XMarkIcon className='h-8 w-8 fill-white' />
            </button>
          </div>
          <div className='w-full flex flex-col mt-8 gap-2 ml-4'>
            <div className='font-bold font-plex text-bodyLight text-xl'>
              <div>Certifications</div>
            </div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
          </div>
          <div className='w-full flex flex-col mt-12 gap-2 ml-4'>
            <div className='font-bold font-plex text-bodyLight text-xl'>
              <div>Courses</div>
            </div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
          </div>
          <div className='w-full flex flex-col mt-12 gap-2 ml-4'>
            <div className='font-bold font-plex text-bodyLight text-xl'>
              <div>Lessons</div>
            </div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
            <div className='font-plex text-gray-600'>#Channel Name</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
