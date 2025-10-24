import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebaes/firebase.config';


export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updatePro=(userData)=> {
        setLoading(true);
        return updateProfile(auth.currentUser,userData);
    }
    const emailVerify=(currentUser)=>{
        return sendEmailVerification(currentUser);
    }

      const loginUser=(email, password)=>{
      setLoading(true);
       return signInWithEmailAndPassword(auth,email, password);
    }

      const signOutUser=()=>{
      setLoading(true);
       return signOut(auth);
    }

    const signInGoogle=()=>{

        return signInWithPopup(auth,GoogleProvider);
    }

    useEffect(()=>{
      const unsuscribe=onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser);
          setLoading(false);
      });

      return ()=>{
          unsuscribe();
      }
    },[])

    const authInfo = {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        createUser,
        updatePro,
        emailVerify,
        signOutUser,
        loginUser,
        signInGoogle,

    }

    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    )
}
