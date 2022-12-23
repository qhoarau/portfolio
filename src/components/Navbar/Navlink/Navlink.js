import React from "react";
import "./Navlink.css";

export default function Navlink({ number, title }) {
  const onClick = (e) => {
    e.preventDefault();
    let element = document.getElementById(title);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div
      className={
        "navlink-container" +
        " animation_fromTop_" +
        number +
        " popup_animation"
      }
      onClick={onClick}
      // href={"#" + title}
    >
      <div className="navlink-number">0{number}.</div>
      <div className="navlink-title">{title}</div>
    </div>
  );
}
