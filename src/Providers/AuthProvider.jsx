import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firbase.config";
import PropTypes from 'prop-types'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const signUp = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false);
        })
        return () =>{
            return unSubscribe();
        }
    },[])


    const authInfo = {
        signUp,
        signInUser,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo} >
            {
                children
            }
           
            
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.node
}

export default AuthProvider;