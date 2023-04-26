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
      <svg
        className="absolute md:right-0 right-full mr-2 md:top-full md:mt-2"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-github"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </div>
  );
};

export default Projects;
