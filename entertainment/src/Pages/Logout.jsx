import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

// useNavigate;
const Logout = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const handelLogout = (callback) => {
    authCtx.logout();
    callback();
  };

  React.useEffect(() => {
    handelLogout(() => {
      navigate("/");
    });
  });
  return <div></div>;
};

export default Logout;
