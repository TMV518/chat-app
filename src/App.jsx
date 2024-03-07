import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.css";
import SignUpPage from "./AuthPage/SignUpPage";
import SentContainer from "./MsgContainers/SentContainer";
import ReceivedContainer from "./MsgContainers/ReceivedContainer";
import ChatInput from "./ChatInput/ChatInput";

function App() {
  return (
    <div className={classes.App}>
      {/*<SignUpPage />*/}
      <div className={classes["view-chats"]}>
        <div className={classes["friends-groups-sect"]}>
          <div className={classes["friends-groups-header"]}>Chat</div>
          <ul className={classes["friends-groups-list"]}>
            <li>
              Chat 1 vnwui enwio jweiojeo jfewiowj jeiwojweio cwen aaaaaa aa
              bbbb hello hello
            </li>
            <li>Chat 2</li>
            <li>Chat 3</li>
            <li>Chat 4</li>
          </ul>
        </div>
        <div className={classes["chat-sect"]}>
          <div className={classes["chat-header"]}>My friend/Group</div>
          <div className={classes["messages"]}>
            <SentContainer />
            <ReceivedContainer />
            <SentContainer />
            <SentContainer />
            <ReceivedContainer />
            <SentContainer />
            <SentContainer />
          </div>
          <ChatInput />
        </div>
      </div>
      {/*<a href="#">About</a>*/}
    </div>
  );
}

export default App;
