import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CharacterAnimationsProvider } from "./context/CharAnimation.tsx";
import ReactGA from "react-ga4";
// import dotenv from "dotenv";
// dotenv.config();
ReactGA.initialize(`${import.meta.env.VITE_G_ANALYTICS}`);
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CharacterAnimationsProvider>
      <App />
    </CharacterAnimationsProvider>
  </React.StrictMode>
);
