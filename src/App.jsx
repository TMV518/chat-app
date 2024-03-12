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
import ViewChats from "./ViewChats/ViewChats";

function App() {
  return (
    <div className={classes.App}>
      {/*<SignUpPage />*/}

      <Banner />
      <div className={classes["profile-parent"]}>
        <div className={classes.profile}>
          <div className={classes["profile-info"]}>
            <img
              className={classes["profile-photo"]}
              src="../src/assets/default_avatar_200x200.png"
            />
            <div className={classes["profile-name"]}>Michael Scott</div>
          </div>
          <div className={classes["profile-options"]}>
            <button>Add Friend</button>
            <button>Block</button>
          </div>
        </div>
      </div>
      {/*<ViewChats />*/}

      {/*<AddFriend />*/}

      {/*<a href="#">About</a>*/}
    </div>
  );
}

export default App;
