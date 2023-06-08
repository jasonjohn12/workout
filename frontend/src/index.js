import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { WorkoutsContextProvider } from "./components/context/WorkoutContext";
import { AuthContextProvider } from "./components/context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
