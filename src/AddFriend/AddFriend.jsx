import Modal from "../Modal";
import classes from "./AddFriend.module.css";

const AddFriend = () => {
  const addFriendContent = (
    <form className={classes["add-friend-form"]}>
      <div>Find friends by searching for their email</div>
      <input type="text" />
      <button type="submit" className={classes["add-friend-search-btn"]}>
        Search
      </button>
    </form>
  );
  return <Modal title={"Add a friend"} content={addFriendContent} />;
};

export default AddFriend;
