import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    logout();
    navigate("/");
  };

  const { state, logout } = useContext(AuthContext);
  console.log(state);
  return (
    <div className="flex gap-2 bg-gray-700 w-fit mx-auto px-4 absolute items-center rounded-xl left-6 bottom-2 z-10 text-white">
      <h1>Welcome, {state.user.name}</h1>
      <button
        onClick={handleClick}
        type="submit"
        className="bg-zinc-500 px-4 py-1 rounded-xl my-4"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default User;
