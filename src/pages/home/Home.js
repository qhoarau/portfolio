import React, { useDebugValue, useEffect, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Social from "../../components/Social/Social";
import Mail from "../../components/Mail/Mail";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Work from "../../components/Work/Work";
import Contact from "../../components/Contact/Contact";

const ratioThreshold = 0.15;
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: ratioThreshold,
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutVisible, setaboutVisible] = useState(false);
  const [experienceVisible, setexperienceVisible] = useState(false);
  const [workVisible, setworkVisible] = useState(false);
  const [contactVisible, setcontactVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  const callbackFunction = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > ratioThreshold) {
        console.log("visible");
        observer.unobserve(entry.target);
        switch (entry.target.id) {
          case "About":
            setaboutVisible(true);
            break;
          case "Experience":
            setexperienceVisible(true);
            break;
          case "Work":
            setworkVisible(true);
            break;
          case "Contact":
            setcontactVisible(true);
            break;
          default:
            break;
        }
        // entry.target.classList.add("animation_fromBottom_1");

      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 2 seconds!");
      setIsLoading(false);

    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        callbackFunction,
        observerOptions
      );

      document.querySelectorAll(".home__main-page-section").forEach((doc) => {
        observer.observe(doc);
      });
    }

  }, [isLoading])
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={mobileMenuOpen ? "home__main-container--no-scroll" : "home__main-container"}>
          <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          <div className="home__page-container">

            <div className="home__main-page-container">
              <Intro />
              <About isVisible={aboutVisible} className="home__main-page-section" />
              <Experience isVisible={experienceVisible} className="home__main-page-section" />
              <Work isVisible={workVisible} className="home__main-page-section" />
              <Contact isVisible={contactVisible} className="home__main-page-section" />
            </div>
            <Social />
            <Mail />
          </div>
        </div>
      )}
    </div>
  );
}
