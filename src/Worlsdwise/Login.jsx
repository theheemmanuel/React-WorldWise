import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, logout, state } = useContext(AuthContext);
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (state.isAuth) navigate("/app", { replace: true });
  }, [state.isAuth, navigate]);
  return (
    <div className="m-6 bg-gray-800 h-[90vh]">
      <Header />
      <div className="bg-gray-700 w-1/3 mx-auto p-6 rounded-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="text-white">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="block w-full rounded-lg p-2 outline-none"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="block w-full rounded-lg p-2 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-xl my-4"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
