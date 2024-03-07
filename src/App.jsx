import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.css";
import SignUpPage from "./AuthPage/SignUpPage";

function App() {
  return (
    <div className={classes.App}>
      <SignUpPage />
      <a href="#">About</a>
    </div>
  );
}

export default App;
