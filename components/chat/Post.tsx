import React from 'react';
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/solid';

type Props = {};

const Post = (props: Props) => {
  return (
    <div className='bg-body w-full py-7 px-6 flex flex-col gap-2 rounded-xl my-6'>
      <div className='text-sm text-gray-600'>
        Posted by <strong>Jamie Christian</strong> 6 Hours ago
      </div>
      <div className='text-bodyLight text-2xl font-headline mb-2'>
        This is the Title of the First User Post.
      </div>
      <div className='text-gray-400 font-plex text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis magna
        eget lectus eleifend, eu scelerisque ipsum commodo. Sed varius arcu est,
        sit amet lacinia nibh tempor vel. Curabitur est enim, condimentum
        vestibulum hendrerit eu, vehicula malesuada arcu.
      </div>
      <div className='flex mt-4 justify-between'>
        <div className='flex gap-1'>
          <div>
            <ArrowSmallUpIcon className='w-5 h-5 fill-gray-600 stroke-gray-600' />
          </div>
          <div className='text-gray-300 font-plex'>18</div>
          <div>
            <ArrowSmallDownIcon className='w-5 h-5 fill-gray-600 stroke-gray-600' />
          </div>
        </div>
        <div className='flex gap-1'>
          <div>
            <ChatBubbleLeftIcon className='w-4 h-5 fill-gray-600 stroke-gray-600' />
          </div>
          <div className='text-gray-300 font-plex'>5</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
