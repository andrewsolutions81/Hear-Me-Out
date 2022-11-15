import React from "react";
import { Link, useNavigate } from "react-router-dom";
import hmoLogo from "../../img/hear-me-out-logo.png";
import noUserLogo from "../../img/person_FILL0_wght400_GRAD0_opsz48.png";
import "./Header.styles.scss";

export default function Header() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <img
        className="header__logo"
        src={hmoLogo}
        alt="hear me out logo"
        onClick={navigateHome}
      />
      <form className="header__search-form" action="">
        <input type="search" placeholder="Get inspired" />
      </form>
      <div className="user-options">
        <img className="header__user" src={noUserLogo} alt="no user logo" />
      </div>
    </div>
  );
}
