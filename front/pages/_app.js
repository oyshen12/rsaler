import '../styles/globals.css';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../Context/AuthContext';

function MyApp({ Component, pageProps }) {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;

  if (!ready) return <p>Loading</p>;
  return (
    <AuthContext.Provider
      value={{ token, login, logout, userId, isAuthenticated }}
    >
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
