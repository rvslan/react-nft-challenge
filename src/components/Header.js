import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/crypto-punk-logo.png";
import searchIcon from "../assets/header/search-icon.png";
import themeSwitchIcon from "../assets/header/theme-switch-icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} alt="logo" className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="search" />
        </div>
        <imput
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="theme switch" />
        </div>
      </div>

      <div className="loginButton">Get in</div>
    </div>
  );
};

export default Header;
