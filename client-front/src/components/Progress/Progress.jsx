import React from "react";
import "./Progress.styles.scss";

export default function Progress() {
  return (
    <div className="progress">
      <main className="progress__container">
        <header className="progress__author">PROGRESS AUTHOR</header>
        <div className="progress__media">PROGRESS MEDIA</div>
        <div className="progress__info">
          <span className="progress__category">PROGRESS CATEGORY</span>
          <p className="progress__description">PROGRESS DESCRIPTION</p>
        </div>
      </main>
    </div>
  );
}
