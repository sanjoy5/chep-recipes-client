import React, { createContext, useContext, useEffect, useState } from 'react'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const [loading, setLoading] = useState(true)

    // Registration with Email Password 
    const createUserByEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update User 
    const updateUser = (createdUser, name, photo) => {
        setLoading(true)
        return updateProfile(createdUser, {
            displayName: name,
            photoURL: photo
        })
    }


    // Login with Email Password

    const signInByEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with Google

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Login with Github

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('Logged in User inside auth state observe : ', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unsubcribe()
        }
    }, [])

    const authInfo = {
        user,
        createUserByEmailPassword,
        updateUser,
        signInByEmailPassword,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}


// Provide Context Function 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthProvider