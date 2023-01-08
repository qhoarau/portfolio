import React, { useState } from "react";
import Navlink from "./Navlink/Navlink";
import Button from "../Button/Button";
import useScrollDirection from "../useScrollDirection/useScrollDirection";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const scrollDirection = useScrollDirection();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleShowMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setCloseMenu(true);
    const timer = setTimeout(() => {
      setMobileMenuOpen(!mobileMenuOpen);
      setCloseMenu(false);

    }, 300);
  }

  const onPortraitClick = () => {
    window.location.reload(false);
  };
  return (
    <>
      <div
        className={
          scrollDirection == "down"
            ? "navbar__main-container navbar__main-container--hide"
            : "navbar__main-container"
        }
      >
        <div
          className="navbar__icon-container scale-up_animation"
          onClick={onPortraitClick}
        >
          <div className="navbar__icon-img"></div>
        </div>
        <div className="navbar__navlink-container">
          <Navlink number={"1"} title={"About"} />
          <Navlink number={"2"} title={"Experience"} />
          <Navlink number={"3"} title={"Work"} />
          <Navlink number={"4"} title={"Contact"} />
          <Button title={"Resume"} outline classes={"animation_fromTop_5"} />
        </div>
        <div className="navbar__navlink-container--mobile">
          <FiMenu
            size={36}
            className="navbar__menu-icon animation_fromTop_1"
            onClick={handleShowMenu}
          />
        </div>



      </div>
      {mobileMenuOpen ? (
        <div className="navbar__mobile-overlay--main-container">

          <div className={closeMenu ? "navbar__mobile-overlay--link-container--open" : "navbar__mobile-overlay--link-container--close"} >
            <div className="navbar__mobile-overlay--link-container">
              <div className="navbar__mobile-overlay--close-container">
                <FiX
                  size={36}
                  className="navbar__menu-icon"
                  onClick={handleCloseMenu}
                />
              </div>
              <Navlink number={"1"} title={"About"} isMobile handleCloseMenu={handleCloseMenu} />
              <Navlink number={"2"} title={"Experience"} isMobile handleCloseMenu={handleCloseMenu} />
              <Navlink number={"3"} title={"Work"} isMobile handleCloseMenu={handleCloseMenu} />
              <Navlink number={"4"} title={"Contact"} isMobile handleCloseMenu={handleCloseMenu} />
              <div className="navbar__mobile-overlay--button-container">
                <Button title={"Resume"} outline />
              </div>
              <div>

              </div>
            </div>
          </div>

        </div>
      ) : null
      }
    </>
  );
}
