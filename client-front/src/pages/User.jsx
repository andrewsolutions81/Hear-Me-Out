import React from "react";
import DefaultUserLogo from "../img/no-user-logo2.png";

export default function User() {
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
        <p className="user-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptatum fugiat molestiae ullam explicabo culpa et porro ratione laboriosam, nam quasi ducimus a? Assumenda quas nihil sunt facilis? Suscipit, commodi.</p>
      </main>
    </div>
  );
}
