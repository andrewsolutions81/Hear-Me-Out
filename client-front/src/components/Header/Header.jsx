import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hmoLogo from "../../img/hear-me-out-logo.png";
import newpost from "../../img/newpost.png";
import noUserLogo from "../../img/no-user-logo.png";
import "./Header.styles.scss";

export default function Header() {
  const navigate = useNavigate();
  const [isUserMenuShown, setIsUserMenuShown] = useState(false);

  const navigateHome = () => {
    navigate("/");
  };

  const navigateUser = () => {
    navigate("/user");
    setIsUserMenuShown(false);
  };

  const handleAddPost = () => console.log("working");/////////////////

  const handleUserMenu = (event) => {
    setIsUserMenuShown((current) => !current);
  };

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
        <div className="user-options" onClick={handleUserMenu}>
          <img className="header__user" src={noUserLogo} alt="no user logo" />
        </div>
      </main>
      {isUserMenuShown && (
      <aside>
        <nav className="logedin-dropdown">
            <ul className="logedin-dropdown__list">
              <li onClick={navigateUser}>Profile</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Log Out</li>
            </ul>
        </nav>
      </aside>
      )}
    </div>
  );
}
