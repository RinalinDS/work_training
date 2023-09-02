import { ReactElement, useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
