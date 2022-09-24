import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='w-full h-full relative'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
