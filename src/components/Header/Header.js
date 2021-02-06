// import React from "react";
import style from "./Header.module.css";
import { connect } from "react-redux";
import NavBar from "../NavBar/NavBar";
import RegisterBar from "../RegisterBar/RegisterBar";
import UserMenu from "../UserMenu/UserMenu";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Header = ({ user, isLoading }) => {
  // isLoading = true;
  return (
    <div className={style.header}>
      <NavBar />
      <RegisterBar />

      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#000"
          height={60}
          width={60}
          timeout={33000} //3 secs
        />
      ) : (
        <UserMenu user={user} />
      )}
    </div>
  );
};

const mapStateToProps = state => ({ user: state.user, isLoading: state.loading });

export default connect(mapStateToProps)(Header);
