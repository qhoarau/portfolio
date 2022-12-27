import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Link from "../Link/Link";
import "./About.css";

export default function About({ className, isVisible }) {

  console.log(className);
  return (
    <div className={isVisible ? ("about-section__main-container animation_fromBottom_1 " + className) : ("about-section__main-container " + className)} id="About">
      {isVisible ? (
        <>
          <SectionHeader number={"1"} title={"About"} />
          <div className="about-section__bio-img-container">
            <div className="about-section__bio-container text-gray-small">
              <div className="text-gray-small">
                Hi! My name is Quentin and I love creating user friendly things on
                the Internet. My interest in web development started in 2018 when I
                had my first web development course. We only scratched the surface
                so I decided to learn HTML, CSS and JavaScript and React Native on
                my own by developing a tik tok Clone
              </div>
              <div className="text-gray-small">
                Fast-forward to today, and I’ve had the privilege of working at a
                {" "}
                <Link title={"huge telecom company"} link={"https://www.orange.fr/"} />, {" "}
                <Link title={"a start-up"} link={"https://www.okina.fr/"} /> and some personal projects. My main
                focus these days is building an online food ordering and products
                management platform at <Link title={"IziUp"} link={"https://iziup.fr/"} />
                .
              </div>
              <div className="text-gray-small">
                Here are a few technologies I’ve been working with recently:
              </div>
              <ul className="about-section__skills-list">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>React Native</li>
                <li>Node.js</li>
                <li>Firebase services</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div className="about-section__img-container">

              <div className="about-section__img-item">

              </div>
              <div className="about-section__img-item--border"> </div>

            </div>
          </div>
        </>
      ) : null}

    </div>
  );
}
