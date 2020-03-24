import React from 'react';
import './Login.css';
import Auth from './use-auth';

const Login = () => {
  const auth = Auth();
  // console.log(auth.user);
  return (
    <div className='text-center'>
      <h1>Join the Party !!!</h1>
      {/* {auth.user().err && <p>Hello</p>} */}
      {auth.user ? (
        <button className='loginBtn' onClick={auth.signOut}>
          Sign Out
        </button>
      ) : (
        <button className='loginBtn' onClick={auth.signInWithGoogle}>
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
