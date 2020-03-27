import * as firebase from 'firebase/app';
import 'firebase/auth/';
import firebaseConfig from '../../firebase.config';
import { useState } from 'react';

// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// Authentication
const useAuth = () => {
  // State
  const [user, setUser] = useState(null);

  // Sign In With Google
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = { name: displayName, email, photo: photoURL };
        setUser(signedInUser);
        return res.user;
      })
      .catch(err => {
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
      .then(res => {
        console.log(res);
        setUser(null);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    user,
    signInWithGoogle,
    signOut
  };
};

export default useAuth;
