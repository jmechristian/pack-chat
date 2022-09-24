import React from 'react';
import Post from './chat/Post';

type Props = {};

const MainContainer = (props: Props) => {
  return (
    <div className='w-full px-6 pb-6 pt-3 bg_gradient'>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MainContainer;
