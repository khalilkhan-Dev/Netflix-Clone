import { createContext, useContext, useEffect, useState } from 'react';
import { auth, } from '../Firebase';
import { createUserWithEmailAndPassword,  
     signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged, } from 'firebase/auth';
    import {setDoc,doc} from 'firebase/firestore'


  const AuthContext = createContext();

  export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
     return setDoc(doc( 'users', email), {
        savedShows: []
    })
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}