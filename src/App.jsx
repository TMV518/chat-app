import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.css";
import SignUpPage from "./AuthPage/SignUpPage";
import SentContainer from "./MsgContainers/SentContainer";
import ReceivedContainer from "./MsgContainers/ReceivedContainer";
import ChatInput from "./ChatInput/ChatInput";
import FriendsGroups from "./FriendsGroups/FreiendsGroups";
import Banner from "./Banner/Banner";
import Modal from "./Modal";
import AddFriend from "./AddFriend/AddFriend";

function App() {
  return (
    <div className={classes.App}>
      {/*<SignUpPage />*/}

      <Banner />

      <AddFriend />
      <div className={classes["view-chats"]}>
        <FriendsGroups />
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
