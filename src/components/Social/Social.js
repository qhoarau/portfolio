import React from "react";
import { FiInstagram, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import "./Social.css";

export default function Social() {
  return (
    <div className="social__main-container">
      <a className="social__item-container" href="https://github.com/qhoarau">
        <FiGithub size={26} className="social__item popup_animation" />
      </a>
      <a
        className="social__item-container"
        href="https://www.instagram.com/quentin.hru/"
      >
        <FiInstagram size={26} className="social__item popup_animation" />
      </a>
      <a
        className="social__item-container"
        href="https://twitter.com/quentin_hru"
      >
        <FiTwitter size={26} className="social__item popup_animation" />
      </a>
      <a
        className="social__item-container"
        href="https://www.linkedin.com/in/quentin-hoarau-6b93aa173/"
      >
        <FiLinkedin size={26} className="social__item popup_animation" />
      </a>
    </div>
  );
}
