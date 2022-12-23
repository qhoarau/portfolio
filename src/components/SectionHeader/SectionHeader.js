import React from "react";
import "./SectionHeader.css";

export default function SectionHeader({ number, title }) {
  return (
    <div className="section-header__main-container">
      <div className="text-colored-medium">0{number}.</div>
      <div className="text-white-medium section-header__title">{title}</div>
      <div className="section-header__bar"></div>
    </div>
  );
}
