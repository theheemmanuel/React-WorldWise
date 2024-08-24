import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isAuth) navigate("/");
  }, [navigate, state.isAuth]);
  return state.isAuth ? children : null;
};

export default ProtectedRoute;
