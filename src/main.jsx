import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ReloadPrompt from "./ReloadPrompt.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReloadPrompt />
    <App />
  </StrictMode>
);
