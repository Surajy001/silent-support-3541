/*import React from 'react'

const AuthContext = () => {
  return (
    <div>AuthContext</div>
  )
}

export default AuthContext
*/

import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext();

function AuthContextProvider({children}) {

    const [state , setState]=useState({
        token:null,
        isAuth:false
    })

    //console.log("ls",localStorage.getItem("loggedin"));

    const login=(token)=>{
        setState({...state ,isAuth:true,token})
    }

    const logout=()=>{
        setState({...state ,isAuth:false,token:null})

    }

    return (
        <>
        <AuthContext.Provider value={{authState:state,login,logout}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;
