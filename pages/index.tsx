import MainContainer from '../components/MainContainer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className='w-full h-full flex justify-center items-center bg_gradient'>
      <div className='bg-orange-600 text-white rounded-sm'>
        <button onClick={() => router.push('/chat')}>
          <div className='px-6 py-2'>Log In</div>
        </button>
      </div>
    </div>
  );
}
