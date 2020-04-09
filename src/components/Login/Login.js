import React from 'react';
import './Login.css';
import 'firebase/auth';
import useAuth from './useAuth';

const Login = () => {
  const auth = useAuth();
  // console.log(auth.user);

  const handleSignIn = () => {
    auth.signInWithGoogle().then((res) => {
      window.location.pathname = '/inventory';
    });
  };
  return (
    <div className='text-center'>
      <h1>Join the Party !!!</h1>
      {/* {auth.user().err && <p>Hello</p>} */}
      {auth.user ? (
        <button className='loginBtn' onClick={auth.signOut}>
          Sign Out
        </button>
      ) : (
        <button className='loginBtn' onClick={handleSignIn}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
