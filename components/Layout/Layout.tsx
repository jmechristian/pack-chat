import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import { useCycle } from 'framer-motion';

const Layout = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <div className='w-full h-full relative'>
      <Header toggle={() => toggleOpen()} />
      <MobileMenu isOpen={isOpen} close={() => toggleOpen()} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
