/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const AuthContext = createContext();

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
};

export function AuthProvide({ children }) {
  const initialState = { user: null, isAuth: false };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const login = (email, password) => {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };
  return (
    <AuthContext.Provider value={{ state, login, logout, FAKE_USER }}>
      {children}
    </AuthContext.Provider>
  );
}
