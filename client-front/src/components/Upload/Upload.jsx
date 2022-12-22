import React from "react";
import Projects from "../Projects/Projects";
import  ReactDom  from "react-dom";
import "./Upload.scss";

export default function Upload() {
  return ReactDom.createPortal(
    <div className="upload">
      <div className="upload__container">
        <header className="upload__header">
          <span className="upload__new-project">New Projet</span>
        </header>
        <hr className="upload__hr" />
        <main className="upload__main">
          <Projects />
        </main>
      </div>
    </div>
   , document.getElementById('portal')
  );
}
