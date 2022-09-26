import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePostForm } from '../../store/chat/chatSlice';
import { RootState } from '../../store/store';

const MobilePostForm = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  const dispatch = useDispatch();

  const channel = useSelector((state: RootState) => state.chat.channel);

  const addPostHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log('title:' + postTitle);
    console.log('content:' + postContent);
    resetForm();
  };

  const resetForm = () => {
    setPostTitle('');
    setPostContent('');
  };

  const cancelFormHandler = () => {
    dispatch(closePostForm());
  };

  return (
    <div className='bg-dark w-full h-screen fixed top-0 left-0 z-50'>
      <div className='flex flex-col w-full h-full justify-start items-center p-7 gap-12'>
        <div className='flex justify-between items-end w-full flex-wrap mb-2'>
          <div className='font-headline text-3xl text-bodyLight'>Add Post</div>
          <div className='bg-body rounded-md'>
            <div className='py-1 px-2 text-gray-500 text-sm'>#{channel}</div>
          </div>
        </div>
        <div className='w-full'>
          <form className='flex flex-col gap-6'>
            <label className='flex flex-col w-full gap-2'>
              <div className=' flex justify-between items-end'>
                <div className='text-gray-300 text-lg'>Post Title</div>
                <div className='text-sm text-gray-500'>*Required</div>
              </div>
              <textarea
                rows={2}
                className='mt-1 block w-full rounded p-3 bg-gray-400 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 leading-snug font-plex'
                onChange={(event) => setPostTitle(event.target.value)}
                value={postTitle}
              />
            </label>
            <label className='flex flex-col w-full gap-2'>
              <div className=' flex justify-between items-end'>
                <div className='text-gray-300 text-lg'>Post Content</div>
                <div className='text-sm text-gray-500'>*Required</div>
              </div>
              <textarea
                rows={10}
                className='mt-1 block p-3 w-full rounded bg-gray-400 border-transparent  focus:bg-white focus:ring-0'
                onChange={(event) => setPostContent(event.target.value)}
                value={postContent}
              />
            </label>
          </form>
        </div>
        <div className='flex flex-col gap-5 w-full'>
          <button
            className='bg-orange-600 rounded'
            type='submit'
            onClick={addPostHandler}
          >
            <div className='py-4 text-white font-plex font-bold uppercase text-lg'>
              Submit
            </div>
          </button>
          <button
            className='border border-gray-500 rounded'
            onClick={cancelFormHandler}
          >
            <div className='py-4 text-gray-500 font-plex font-bold uppercase text-lg'>
              Cancel
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobilePostForm;
