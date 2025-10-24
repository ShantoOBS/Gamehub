import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import { auth } from '../firebaes/firebase.config';


export const AuthContext = createContext();

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

    }

    return (
        <AuthContext value={authInfo}>
            {
                children
            }
        </AuthContext>
    )
}
