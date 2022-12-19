import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children }) {
  const authCtx = useContext(AuthContext);

  if (!authCtx.authState.isAuth) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

export default PrivateRoute;
