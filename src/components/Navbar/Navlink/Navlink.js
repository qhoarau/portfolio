import React from "react";
import "./Navlink.css";

export default function Navlink({ number, title, isMobile, handleCloseMenu }) {
  const onClick = (e) => {
    e.preventDefault();
    let element = document.getElementById(title);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    if (handleCloseMenu) {
      handleCloseMenu();
    }
  };
  return (
    <div
      className={
        isMobile ? ("navlink-container--mobile") : (
          "navlink-container" +
          " animation_fromTop_" +
          number +
          " popup_animation")
      }
      onClick={onClick}
    // href={"#" + title}
    >
      <div className={isMobile ? "text-colored-small" : "navlink-number"}>0{number}.</div>
      <div className={isMobile ? "navlink-title--mobile" : "navlink-title"}>{title}</div>
    </div>
  );
}
