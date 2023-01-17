import React from "react";
import "./Button.css";

export default function Button({ onClick, outline, title, classes, link }) {
  return (
    <>
      {
        link ? (
          <a
            className={classes ? "button__container " + classes : "button__container"}
            href={link} target="_blank"
          >

            <div className="button__title">{title}</div>


          </a>
        ) : (
          <div
            className={classes ? "button__container " + classes : "button__container"}
            onClick={onClick}
          >

            <div className="button__title">{title}</div>


          </div>
        )
      }
    </>

  );
}
