/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , GoogleAuthProvider } from "firebase/auth";
import app from "../../../../firebase.config";
import { getAuth } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext(null);
const AuthConfiguration = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [reload , setReload] = useState(false);
    const googleProvider = new GoogleAuthProvider();


  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  };

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{
            // console.log("user--------->",currentUser)
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email:userEmail};
            setUser(currentUser)
            setLoading(false)
            console.log('Current User: ',currentUser)
            if(currentUser){
                axios.post('https://hotel-booking-server-psi.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log('token response',res.data);
                })
            }
            else{
                axios.post('https://hotel-booking-server-psi.vercel.app/logout',loggedUser,{withCredentials:true})
                .then(res=>{console.log(res.data)})
                
            }
        })
        return () =>{
            unSubscribe();
        } ;
    },[auth, reload, user?.email])

    const authInfo = { setReload,GoogleSignIn,setUser,user,loading,createUser,signInUser,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfiguration; 