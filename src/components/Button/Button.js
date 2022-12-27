import React from "react";
import "./Button.css";

export default function Button({ onClick, outline, title, classes, link }) {
  return (
    <div
      className={classes ? "button__container " + classes : "button__container"}
      onClick={onClick}
    >
      {link ? (
        <a className="button__title" href={link} target="_blank">{title}</a>

      ) : (
        <div className="button__title">{title}</div>
      )}

    </div>
  );
}
