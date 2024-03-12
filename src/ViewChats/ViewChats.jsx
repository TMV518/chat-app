import classes from "./ViewChats.module.css";
import FriendsGroups from "../FriendsGroups/FreiendsGroups";
import SentContainer from "../MsgContainers/SentContainer";
import ReceivedContainer from "../MsgContainers/ReceivedContainer";
import ChatInput from "../ChatInput/ChatInput";

const ViewChats = () => {
  return (
    <div className={classes["view-chats"]}>
      <FriendsGroups />
      <div className={classes["chat-sect"]}>
        <div className={classes["chat-header"]}>My friend/Group</div>
        <div className={classes["messages"]}>
          <SentContainer />
          <ReceivedContainer />
        </div>
        <ChatInput />
      </div>
    </div>
  );
};

export default ViewChats;
