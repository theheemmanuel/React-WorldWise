import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostContextProvider } from "./Context.jsx";
import { AuthProvide } from "./AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostContextProvider>
      <AuthProvide>
        <App />
      </AuthProvide>
    </PostContextProvider>
  </StrictMode>
);
