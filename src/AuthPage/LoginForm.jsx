import { useState, useRef } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const loginFormRef = useRef();

  return (
    <form className={classes["login-box"]} ref={loginFormRef}>
      <span>Log In</span>
      <div className={classes["login-fields"]}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            //setLoginEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            //setLoginPassword(e.target.value);
          }}
        />
        <span className={classes.error}>{props.errMsg}</span>
      </div>

      <button
        className={classes["login-button"]}
        onClick={(e) => {
          //login(e);
        }}
      >
        Log In
      </button>
      <span>
        Not Registered?{" "}
        <span className={classes["toggle"]} onClick={props.toggleRegister}>
          Sign Up
        </span>
      </span>
    </form>
  );
};

export default LoginForm;
