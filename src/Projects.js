import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
const Projects = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const getScrollPosition = () => {
    console.log(window.scrollY);
    if (window.scrollY > props.scrollPosition) {
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
      className={`absolute ${
        props.xPosition
      }  transition-all ease-in delay-300 h-1/4 w-1/3 bg-sky-400 rounded-md ${
        isVisible ? props.newPosition : props.oldPosition
      }
      }`}
    ></div>
  );
};

export default Projects;
