import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}

      <div className={classes.popup}>
        <div className={classes["top-bar"]}>
          <button onClick={props.onClose}>X</button>
        </div>
        <header>{props.title}</header>
        <div className={classes["main-content"]}>{props.content}</div>
      </div>
    </>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay
          onClose={props.onClose}
          title={props.title}
          content={props.content}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
