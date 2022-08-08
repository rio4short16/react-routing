import React from "react";
import ReactDOM from "react-dom/client";

// Setup/ Settings
// Bootstrap, Custom CSS, Redux
import "./index.css";

// Import the main app
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);
