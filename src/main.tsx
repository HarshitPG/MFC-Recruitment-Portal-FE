import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CharacterAnimationsProvider } from "./context/CharAnimation.tsx";
// import dotenv from "dotenv";
// dotenv.config();

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <CharacterAnimationsProvider>
//       <App />
//     </CharacterAnimationsProvider>
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <CharacterAnimationsProvider>
      <App />
    </CharacterAnimationsProvider>
  </>
);
