import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.layout}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
