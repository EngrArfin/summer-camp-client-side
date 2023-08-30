import { useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRouter = ({children}) => {

    const {user, loading} = useState(AuthContext)
    if(loading){
        <progress className="progress w-56"></progress>
    }

    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>
    
};

export default PrivateRouter;