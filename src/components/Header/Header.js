// import React from "react";
import style from "./Header.module.css";

import NavBar from "../NavBar/NavBar";
import RegisterBar from "../RegisterBar/RegisterBar";
import { WithReduxComponent1 } from "../../redux/store";

const Header = () => {
  return (
    <div className={style.header}>
      <NavBar />
      <RegisterBar />
      <WithReduxComponent1 />
    </div>
  );
};

export default Header;
