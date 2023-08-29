import { getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import {app} from '../firebase/firebase.config';

import {GoogleAuthProvider, createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
/* google add l-1 */
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null); 
    const [loading, setLoading]= useState(true);

    const createUser = (email, password,photo) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password,photo);
    }

    const signIn = (email, password,photo) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password, photo);
    }

    /* google add l-2 */
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleAuthProvider);
    }


    const logOut =() =>{
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('auth state change ', currentUser);
            setUser(currentUser);
            setLoading(false)

        });

        return ()=> {
            unsubscribe();
        }

    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        /* google */
        signInWithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        
    );
};

export default AuthProvider;