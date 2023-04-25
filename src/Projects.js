import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
const Projects = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const getScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", getScrollPosition);
    return () => {
      window.removeEventListener("scroll", getScrollPosition);
    };
  }, []);

  return (
    <div
      className={`absolute  transition-all ease-in delay-300 h-1/4 w-1/3 bg-sky-400 rounded-md ${
        isVisible ? `top-0` : `top-full`
      }`}
    ></div>
  );
};

export default Projects;
