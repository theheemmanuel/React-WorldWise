import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostContextProvider } from "./Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </StrictMode>
);
