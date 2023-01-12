import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import WorkComponent from "./WorkComponent/WorkComponent";
import "./Experience.css";

const list = [
  {
    sectionTitle: "IziUp",
    post: "Developer fullstack",
    company: "IziUp",
    from: "September 2022",
    to: "now",
    tasks: [
      "Write modern, performant, maintainable code for the app stack",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Nodejs, Firebase Services, Github workflows",
      "Communicate with the client on daily basis",
      "Built, developed and shipped the administrator and client app",
    ],
  },
  {
    sectionTitle: "Horizon Pro",
    post: "Developer fullstack",
    company: "Horizon Pro",
    from: "October 2022",
    to: "now",
    tasks: [
      "Made the back office production ready",
      "Communicate with the client on daily basis",
    ],
  },
  {
    sectionTitle: "Okina",
    post: "Project manager",
    company: "Okina",
    from: "January 2021",
    to: "June 2022",
    tasks: [
      "Communicate with teams of developers and clients on a daily basis",
      "Lead and organized sprint planning and sprint review meetings with the development team",
      "Interfaced with clients on a weekly basis, providing technological expertise",
    ],
  },
  {
    sectionTitle: "Orange",
    post: "Developer Web",
    company: "Orange",
    from: "January 2020",
    to: "June 2020",
    tasks: [
      "Developed and maintained code for in-house primarily using HTML, CSS, JavaScript",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
    ],
  },
];
export default function Experience({ className, isVisible }) {
  const [indexSelected, setIndexSelected] = useState(0);
  return (
    <div
      className={
        isVisible
          ? "experience-section__main-container animation_fromBottom_1 " +
          className
          : "experience-section__main-container " + className
      }
      id="Experience"
    >
      {isVisible ? (
        <>
          <SectionHeader number={"2"} title={"Where I've worked"} />
          <WorkComponent
            list={list}
            indexSelected={indexSelected}
            toggleNewIndex={setIndexSelected}
          />
        </>
      ) : null}
    </div>
  );
}
