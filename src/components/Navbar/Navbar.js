import React from "react";
import Navlink from "./Navlink/Navlink";
import Button from "../Button/Button";
import useScrollDirection from "../useScrollDirection/useScrollDirection";

import "./Navbar.css";

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={
        scrollDirection == "down"
          ? "navbar__main-container navbar__main-container--hide"
          : "navbar__main-container"
      }
    >
      <div className="navbar__icon-container">
        <div className="navbar__icon-img"></div>
      </div>
      <div className="navbar__navlink-container">
        <Navlink number={"1"} title={"About"} />
        <Navlink number={"2"} title={"Experience"} />
        <Navlink number={"3"} title={"Work"} />
        <Navlink number={"4"} title={"Contact"} />
        <Button title={"Resume"} outline classes={"animation_fromTop_5"} />
      </div>
    </div>
  );
}
