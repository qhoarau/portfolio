import React from "react";
import "./Button.css";

export default function Button({ onClick, outline, title, classes }) {
  return (
    <div
      className={classes ? "button__container " + classes : "button__container"}
      onClick={onClick}
    >
      <div className="button__title">{title}</div>
    </div>
  );
}
