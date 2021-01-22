// import React from "react";
import style from "./Header.module.css";
import Logo from "../Logo/Logo";
import { WithReduxComponent1 } from "../../redux/store";

const Header = () => {
  return (
    <div className={style.header}>
      <Logo />
      <span>Header</span>
      <WithReduxComponent1 />
    </div>
  );
};

export default Header;
