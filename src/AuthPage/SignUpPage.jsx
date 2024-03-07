import { useState, useRef } from "react";
import classes from "./SignUpPage.module.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

/*Contains forms for registering and logging in*/
const SignUpPage = () => {
  const [registerForm, setRegisterForm] = useState(true);

  const [errMsg, setErrMsg] = useState("Error");

  //toggles between register and login forms
  const setRegisterHandler = () => {
    setRegisterForm((registerForm) => !registerForm);
  };
  return (
    <div className={classes["signup-pg"]}>
      <div className={classes["logo-section"]}>
        <span className={classes.logo}>SmallTalk</span>
        <br />
        <span>Chat with friends</span>
      </div>
      {/*REGISTER FORM*/}
      {registerForm ? (
        <RegisterForm toggleRegister={setRegisterHandler} errMsg={errMsg} />
      ) : (
        <LoginForm toggleRegister={setRegisterHandler} errMsg={errMsg} />
      )}
      {/*<p>
Signed-In User:{" "}
<span>
{user?.email}
<button onClick={logout}>Sign Out</button>
</span>
</p>*/}
    </div>
  );
};

export default SignUpPage;
