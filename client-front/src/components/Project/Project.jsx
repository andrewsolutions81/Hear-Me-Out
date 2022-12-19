import React from "react";
import "./Project.styles.scss";

export default function Project() {
  return (
    <main className="project">
      <div className="project__container">
        <header className="project__header">
          <h1 className="project__title"><b> PROJECT TITLE </b></h1>
          <span className="project__category">PROJECT CATEGORY</span>
        </header>
          <p className="project__description"> PROJECT DESCRIPTION </p>
      </div>
    </main>
  );
}
