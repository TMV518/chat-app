import classes from "./RegisterForm.module.css";
import { useRef } from "react";

const RegisterForm = (props) => {
  const registerFormRef = useRef();
  return (
    <form className={classes["signup-box"]} ref={registerFormRef}>
      <span>Register</span>
      <div className={classes["signup-fields"]}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            //setRegisterEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            //setRegisterPassword(e.target.value);
          }}
        />
        {/*<input type="password" placeholder="Re-enter Password" />*/}
        <span className={classes.error}>{props.errMsg}</span>
      </div>
      <button
        className={classes["signup-button"]}
        type="submit"
        onClick={(e) => {
          /*register(e)*/
        }}
      >
        Sign Up
      </button>
      <span>
        Already have an acount?{" "}
        <span className={classes["toggle"]} onClick={props.toggleRegister}>
          Sign in
        </span>
      </span>
    </form>
  );
};

export default RegisterForm;
