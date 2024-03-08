import classes from "./FriendGroupItem.module.css";

const FriendGroupItem = (props) => {
  return (
    <li className={classes["friend-group-item"]}>
      <img
        src="../src/assets/default_avatar_200x200.png"
        className={classes["friend-groups-avatar"]}
      />
      {props.children}
    </li>
  );
};

export default FriendGroupItem;
