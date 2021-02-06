import { NavLink } from "react-router-dom";

import Logo from "../Logo/Logo";

import style from "./NavBar.module.css";
const NavBar = () => {
  return (
    <ul className={style.navbar}>
      <NavLink className={style.navlink} to="/">
        <Logo />
      </NavLink>
      <NavLink className={style.navlink} to="/">
        Home
      </NavLink>
      <NavLink className={style.navlink} to="/my-favorite-goods">
        My Favorite Goods
      </NavLink>
      <NavLink className={style.navlink} to="/cart">
        Cart
      </NavLink>
      <NavLink className={style.navlink} to="/contacts">
        Contacts
      </NavLink>
      <NavLink className={style.navlink} to="#">
        About us
      </NavLink>
    </ul>
  );
};

export default NavBar;
