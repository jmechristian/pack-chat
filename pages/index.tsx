import Post from '../components/chat/Post';

export default function Home() {
  return (
    <div className='w-full px-6 pb-6 pt-3'>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
