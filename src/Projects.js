import React, { useState, useEffect, useRef } from "react";
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
      className={`relative md:absolute ${
        props.xPosition
      }  transition-all translate ease-in delay-300 h-1/4 w-1/2 md:w-1/3 bg-sky-400 rounded-md ${
        isVisible ? props.newPosition : props.oldPosition
      }
      }`}
    >
      <p className="absolute md:left-0 left-full ml-2 md:top-full text-white">
        {props.project}
      </p>
    </div>
  );
};

export default Projects;
