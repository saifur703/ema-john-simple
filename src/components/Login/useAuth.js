import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth/';
import firebaseConfig from '../../firebase.config';
import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

// Authentication
const useAuth = () => {
  // State
  const [user, setUser] = useState(null);

  // Sign In With Google
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setUser(signedInUser);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };

  // Sign Out
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log(res);
        setUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    user,
    signInWithGoogle,
    signOut,
  };
};

export default useAuth;
