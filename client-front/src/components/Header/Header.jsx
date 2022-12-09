import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hmoLogo from "../../img/hear-me-out-logo.png";
import newpost from "../../img/newpost.png";
import noUserLogo from "../../img/no-user-logo.png";
import "./Header.styles.scss";

export default function Header() {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const navigateHome = () => {
    navigate("/");
  };

  const navigateUser = () => {
    navigate("/user");
  };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAddPost = () => console.log("working");

  return (
    <div className="header">
      <main className="header__main">
          <img
            className="header__logo"
            src={hmoLogo}
            alt="hear me out logo"
            onClick={navigateHome}
          />
          <form className="header__search-form" action="">
            <input type="search" placeholder="Get inspired" />
          </form>
          <img
            className="new-post"
            src={newpost}
            alt="new-post-add-logo"
            onClick={handleAddPost}
          />
          <div
            className="user-options"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img className="header__user" src={noUserLogo} alt="no user logo" />
          </div>
      </main>
      {isHovering && (
        <nav className="logedin-dropdown">
          <ul className="logedin-dropdown__list">
            <li>Login</li>
            <li>Sign Up</li>
            <li>Log Out</li>
          </ul>
        </nav>
      )}
    </div>
  );
} /* 20221209 before changing on hover to onClick */
