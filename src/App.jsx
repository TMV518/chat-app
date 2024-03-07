import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.css";
import SignUpPage from "./AuthPage/SignUpPage";
import SentContainer from "./MsgContainers/SentContainer";
import ReceivedContainer from "./MsgContainers/ReceivedContainer";

function App() {
  return (
    <div className={classes.App}>
      {/*<SignUpPage />*/}
      <div className={classes["view-chats"]}>
        <div className={classes["friends-groups-sect"]}></div>
        <div className={classes["chat-sect"]}>
          <div className={classes["messages"]}>
            <SentContainer />
            <ReceivedContainer />
          </div>
          <form className={classes["chat-input"]}>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      {/*<a href="#">About</a>*/}
    </div>
  );
}

export default App;
