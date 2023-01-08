import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";

import "./Intro.css";

export default function Intro() {
  return (
    <div id="intro" className="intro__main-container">
      <div className="text-colored-small animation_fromBottom_1">
        Hi, my name is
      </div>
      <div className="text-white-big animation_fromBottom_2">
        Quentin Hoarau.
      </div>
      <div className="text-gray-big animation_fromBottom_4">
        I build web and mobile app.
      </div>
      <div className="intro__text-container">
        <div className="text-gray-small animation_fromBottom_3">
          I’m a software engineer specializing in building
        </div>
        <div className="text-gray-small animation_fromBottom_3">
          full stack web app. Currently, I’m focused on
        </div>
        <div className="text-gray-small animation_fromBottom_3">
          building an online food ordering and products management platform at {" "}
          <Link title={"IziUp"} link={"https://iziup.fr/"} />
          .
        </div>
      </div>
      <div className="intro__button-container animation_fromBottom_3">
        <Button title={"Check out Chap !"} link={"https://chap-fun.com"} />
      </div>
    </div>
  );
}
