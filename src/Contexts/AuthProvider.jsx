import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../configs/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // User SignUP functionality
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Login user functionality
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    // signOut user functionality
    const userLogout = () => {
        localStorage.removeItem('genius-token')
        return signOut(auth);
    }

    // Update User Profile functionality
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    // sign in with google Provider
    const googleProviderLogin = provider => {
        return signInWithPopup(auth, provider)
    }
    // sign in with gitHub Provider
    const gitHubProviderLogin = provider => {
        return signInWithPopup(auth, provider)
    }

    // Monitor User change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        userLogin,
        userLogout,
        updateUserProfile,
        gitHubProviderLogin,
        googleProviderLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
