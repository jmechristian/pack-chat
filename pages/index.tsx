import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/chat/userSlice';
import { Auth } from 'aws-amplify';
import jwt_decode from 'jwt-decode';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { loginWithPopup, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://pschool.us.auth0.com/api/v2/`,
          scope: 'read:current_user',
        });
        const decoded = jwt_decode(accessToken);
        console.log(decoded);
      } catch (err) {
        console.log(err);
      }
    };

    if (isAuthenticated) {
      console.log(user);
      getToken();
      router.push('/chat');
    } else {
      return;
    }
  }, [isAuthenticated, user, dispatch, router, getAccessTokenSilently]);

  return (
    <div className='w-full h-full flex justify-center items-center bg_gradient'>
      <div className='bg-orange-600 text-white rounded-sm'>
        <button onClick={() => loginWithPopup()}>
          <div className='px-6 py-2'>Log In</div>
        </button>
      </div>
    </div>
  );
}
function getFromAuth0(): {
  idToken: any;
  domain: any;
  name: any;
  email: any;
  phoneNumber: any;
} {
  throw new Error('Function not implemented.');
}
