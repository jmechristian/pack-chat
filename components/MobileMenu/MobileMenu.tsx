import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import MobileMenuItem from './MobileMenuItem';

const MobileMenu = ({ isOpen, close }) => {
  const variants = {
    open: {
      clipPath: 'circle(141% at 0 0)',
      transition: {
        duration: 0.3,
        staggerChildren: 1,
      },
    },
    closed: {
      clipPath: 'circle(0% at 0 0)',
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
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
        <motion.div
          className='pt-7 px-7 pb-10 flex flex-col w-full'
          variants={itemVariants}
        >
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
            <MobileMenuItem name='Packaging Management' />
            <MobileMenuItem name='Packaging Science' />
            <MobileMenuItem name='Automotive Packaging' />
          </div>
          <div className='w-full flex flex-col mt-12 gap-2 ml-4'>
            <div className='font-bold font-plex text-bodyLight text-xl'>
              <div>Courses</div>
            </div>
            <MobileMenuItem name='Material' />
            <MobileMenuItem name='Industry' />
            <MobileMenuItem name='Food and Beverage' />
            <MobileMenuItem name='Supply Chain and Logistics' />
            <MobileMenuItem name='Design' />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
