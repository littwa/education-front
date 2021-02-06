import style from "./UserMenu.module.css";
import authOperation from "../../redux/auth/authOperation";
import { connect } from "react-redux";

const UserMenu = ({ user, onSignOut }) => {
  const onClick = e => {
    e.preventDefault();
    onSignOut();
  };

  // console.log(111, isLoading);

  // return user.status ? <div>2323</div> : <div>7777</div>;

  return (
    user.status === "Verified" && (
      <form className={style.form}>
        <img alt="pic" style={{ width: "45px", padding: "5px" }} src={user.avatarURL} />
        <h4 className={style.input}>
          Hi, <span>{user.name}</span>
        </h4>
        <button onClick={onClick} type="button" className={style.btn}>
          Log out
        </button>
      </form>
    )
  );
};

const mapDispatchToProps = { onSignOut: authOperation.signOut };

export default connect(null, mapDispatchToProps)(UserMenu);
