/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../assets/Components/Layout/Authconfiguration/Authconfiguration";



const PrivatePortes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location} to={'/login'}></Navigate>
};

export default PrivatePortes;