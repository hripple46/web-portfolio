import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
const Projects = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("Current Position:" + window.scrollY);
      if (window.scrollY > 200) {
        setIsVisible(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
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
