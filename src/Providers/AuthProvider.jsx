import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    //store user info
    const [user, setUser] = useState(null);

    //set loading icon when clicked reload
    const [loading, setLoading] = useState(true);

    //create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //login user with email and password
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //google pop up sign in
    const googlePopUpSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    //github pop up sign in
    const githubPopUpSignIn = ()=>{
        return signInWithPopup(auth, githubProvider);
    }


    //logout user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the observer', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user, //user Info
        createUser, //create user
        logOut, //logout user
        signInUser, //sign in existing user
        loading, //for loading icon
        googlePopUpSignIn, //google sign in
        githubPopUpSignIn, //github sign in
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;