import React, { createContext, useEffect, useState } from 'react';
import {
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user with email-password
    const signUp = async(email, password, name, newImage) => {

        const profile = {
            displayName: name,
            photoURL: newImage
        }

        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, profile);
    }


    // sign in with email-password
    const logIn = async(email, password) => {
        await signInWithEmailAndPassword(auth, email, password);
    }


    // log out
    const logOut = async() => {
        await signOut(auth)
    }


    // observer
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser)
        })
        return () => unSubscribe();
    },[])

    const authInfo = {
        user,
        signUp,
        logIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;