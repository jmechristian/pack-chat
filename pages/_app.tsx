import '../styles/globals.css';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain='pschool.us.auth0.com'
        clientId='1k6c9jwPXGggdHgyd3Hr7wbA9SjmOFB4'
        redirectUri='http://localhost:3000/chat'
        audience='https://pschool.us.auth0.com/api/v2/'
        scope='read:current_user update:current_user_metadata'
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </Provider>
  );
}

export default MyApp;
