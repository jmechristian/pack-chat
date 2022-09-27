import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import MainContainer from '../components/MainContainer';
import MobilePostForm from '../components/chat/MobilePostForm';

const Chat = () => {
  return (
    <>
      <Layout>
        <MainContainer />
        <MobilePostForm />
      </Layout>
    </>
  );
};

export default Chat;
