/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut , GoogleAuthProvider } from "firebase/auth";
import app from "../../../../firebase.config";
import { getAuth } from "firebase/auth";



export const AuthContext = createContext(null);
const AuthConfiguration = ({children}) => {
    const auth = getAuth(app);
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const [reload , setReload] = useState(false);
    const googleProvider = new GoogleAuthProvider();


  const [ spotCollection , setSpotCollection ] = useState([]);
  useEffect(()=>{
      fetch('https://tourism-management-server-dusky.vercel.app/alltouristsSpot')
      .then(res=>res.json())
      .then(data=>{
        //   console.log(data);
          setSpotCollection(data);
      }) 
  },[])

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
            setUser(currentUser)
            setLoading(false)
            // console.log('Current User: ',currentUser)
        })
        return () =>{
            unSubscribe();
        } ;
    },[auth, reload])

    const authInfo = { spotCollection , setReload,GoogleSignIn,setUser,user,loading,createUser,signInUser,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthConfiguration; 