import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import MainContainer from '../components/MainContainer';
import MobileMenu from '../components/MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {};

const Chat = (props: Props) => {
  return (
    <>
      <Layout>
        <MainContainer />
      </Layout>
    </>
  );
};

export default Chat;
