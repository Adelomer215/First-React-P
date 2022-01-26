import React from "react";
import hStyle from "./Header.module.css";
import logo from "./img/factor.png";

const Header = () => {
  return (
    <header className={hStyle.header}>
      <div className="{container d-flex justify-content-between align-items-center h-100}">
        <div>
          <img src={logo} alt="logo" />
          <span>Meme Generator</span>
        </div>
        <div className="content">
          <p>React Course - Project 3</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
