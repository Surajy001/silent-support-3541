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

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    token: null,
    isAuth: localStorage.getItem("loggedin")
      ? Boolean(localStorage.getItem("loggedin"))
      : false,
  });
  const login = (token) => {
    localStorage.setItem("loggedin", true);
    setState({ ...state, isAuth: true, token });
  };

  const logout = () => {
    localStorage.setItem("loggedin", false);
    setState({ ...state, isAuth: false, token: null });
  };

  return (
    <>
      <AuthContext.Provider value={{ authState: state, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default AuthContextProvider;
