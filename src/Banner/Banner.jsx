import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div>SmallTalk</div>
      <img
        className={classes["banner-user-avatar"]}
        src="../src/assets/default_avatar_200x200.png"
      />
    </div>
  );
};

export default Banner;
