import React, { useState } from "react";
import DefaultUserLogo from "../img/no-user-logo2.png";
import EveryProgress from "../components/EveryProgress/EveryProgress";
import Projects from "../components/Projects/Projects";
import Comments from "../components/Comments/Comments";
import "../styles/User.styles.scss";

export default function User() {
  const tabsComponents = [<EveryProgress />,<Projects />,<Comments />,];

  const [activeTab, setActiveTab] = useState("Progress");
  const [currentTabShown , setCurrentTabShown ] = useState(tabsComponents[0]);

  const handleTab = (e) => {
    const tabClicked = e.target.id
    setActiveTab(tabClicked)
    if(tabClicked === "Progress"){
      setCurrentTabShown(tabsComponents[0])
    }
    if(tabClicked === "Projects"){
      setCurrentTabShown(tabsComponents[1])
    }
    if(tabClicked === "Comments"){
      setCurrentTabShown(tabsComponents[2])
    }
  }

  return (
    <div className="user">
      <main className="user__main">
        <img
          className="header__logo"
          src={DefaultUserLogo}
          alt="default user logo"
        />
        <h1>User name</h1>
        <section className="user-stats">
          <article className="user-stats__text">
            <span className="user-stats__number">10 </span>
            Progress
          </article>
          <article className="user-stats__text">
            <span className="user-stats__number">10 </span>
            Projects
          </article>
          <article className="user-stats__text">
            <span className="user-stats__number">10 </span>
            Rank
          </article>
        </section>
        <p className="user-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          voluptatum fugiat molestiae ullam explicabo culpa et porro ratione
          laboriosam, nam quasi ducimus a? Assumenda quas nihil sunt facilis?
          Suscipit, commodi.
        </p>
      </main>
      <hr></hr>
      <section className="user-secondary">
        <nav className="user__tabs">
          <button
            className={`user__tab ${activeTab === "Progress" ? "active" : ""}`}
            id="Progress"
            onClick={handleTab}
          >
            Progress
          </button>
          <button
            className={`user__tab ${activeTab === "Projects" ? "active" : ""}`}
            id="Projects"
            onClick={handleTab}
          >
            Projects
          </button>
          <button
            className={`user__tab ${activeTab === "Comments" ? "active" : ""}`}
            id="Comments"
            onClick={handleTab}
          >
            Comments
          </button>
        </nav>
        <div className="current-tab-shown">
          {currentTabShown}
        </div>
      </section>
    </div>
  );
}
