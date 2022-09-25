import React from 'react';
import Layout from '../components/Layout/Layout';
import MainContainer from '../components/MainContainer';
import MobilePostForm from '../components/chat/MobilePostForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Chat = () => {
  const openMobileForm = useSelector((state: RootState) => state.chat.value);

  return (
    <>
      <Layout>
        <MainContainer />
        {openMobileForm && <MobilePostForm />}
      </Layout>
    </>
  );
};

export default Chat;
