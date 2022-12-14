import React, { Children, useState } from "react";
import DefaultUserLogo from "../img/no-user-logo2.png";
import EveryProgress from "../components/EveryProgress/EveryProgress";
import Projects from "../components/Projects/Projects";
import Comments from "../components/Comments/Comments";
import "../styles/User.styles.scss";

export default function User() {
  const [activeTab, setActiveTab] = useState("Progress");
  const [currentTabShown , setCurrentTabShown ] = useState("<Progress />");

  const handleClick = (e) => {
    const tabClicked = e.target.id
    setActiveTab(tabClicked)
    setCurrentTabShown(`<${tabClicked} />`) //maybe use an use effect on this one for rendereing as a second render
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
            onClick={handleClick}
          >
            Progress
          </button>
          <button
            className={`user__tab ${activeTab === "Projects" ? "active" : ""}`}
            id="Projects"
            onClick={handleClick}
          >
            Projects
          </button>
          <button
            className={`user__tab ${activeTab === "Comments" ? "active" : ""}`}
            id="Comments"
            onClick={handleClick}
          >
            Comments
          </button>
        </nav>
        <div>
{/*           {activeTab === "Progress" ? <EveryProgress /> : <Projects />}
          <Comments /> */}
          {currentTabShown}
        </div>
      </section>
    </div>
  );
}
