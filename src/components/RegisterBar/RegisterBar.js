import { NavLink } from "react-router-dom";
import style from "./RegisterBar.module.css";
const RegisterBar = () => {
  return (
    <ul className={style.regbar}>
      <NavLink className={style.navlink} to="/sign-in">
        Sign in
      </NavLink>
      <NavLink className={style.navlink} to="/sign-up">
        Sign up
      </NavLink>
    </ul>
  );
};

export default RegisterBar;
