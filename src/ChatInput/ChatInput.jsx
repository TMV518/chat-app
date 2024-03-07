import classes from "./ChatInput.module.css";

const ChatInput = () => {
  return (
    <form className={classes["chat-input"]}>
      <input type="text" />
      <button type="submit">{">"}</button>
    </form>
  );
};

export default ChatInput;
