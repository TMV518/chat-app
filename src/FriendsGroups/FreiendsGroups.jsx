import classes from "./FriendsGroups.module.css";
import { useState } from "react";
import FriendGroupItem from "./FriendGroupItem";

const FriendsGroups = () => {
  /*component for list of friends and groups*/

  const chatArr = [
    "Michael",
    "Jim",
    "Pam",
    "Dwight",
    "Andy",
    "Angela",
    "Phyllis",
    "Stanley",
    "Oscar",
    "Kevin",
    "Toby",
    "Meredith",
    "Creed",
    "Darryl",
    "Gabe",
    "Todd",
    "Jan",
    "Holly",
    "Erin",
    "Kelly",
    "Ryan",
  ];
  const [chatList, setChatList] = useState(chatArr);

  return (
    <div className={classes["friends-groups-sect"]}>
      <div className={classes["friends-groups-header"]}>Chat</div>
      <ul className={classes["friends-groups-list"]}>
        {chatList.map((item) => {
          return <FriendGroupItem>{item}</FriendGroupItem>;
        })}
      </ul>
    </div>
  );
};

export default FriendsGroups;
