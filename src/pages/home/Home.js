import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import Social from "../../components/Social/Social";
import Mail from "../../components/Mail/Mail";
import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 2 seconds!");
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home__main-container">
          <Navbar />
          <div className="home__page-container">
            <Social />
            <div className="home__main-page-container">
              <Intro />
              <About />
              <Experience />
            </div>

            <Mail />
          </div>
        </div>
      )}
    </div>
  );
}
