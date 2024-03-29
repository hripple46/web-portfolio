import React, { useState, useEffect, useRef } from "react";

const Projects = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
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
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="h-full w-full object-cover rounded-md"
      >
        <img
          className="z-20 h-full w-full object-cover rounded-md"
          src={props.image}
          alt="project"
        />
        {isHovering && (
          <p className="w-full h-full bg-gray-800/75 z-10 absolute text-white top-0">
            {props.description}
          </p>
        )}
      </div>

      <div className="absolute md:top-full md:mt-1 top-0 w-full  flex md:flex-row flex-col md:left-0 left-full justify-start items-start md:items-center">
        <p className="text-white whitespace-pre-line">{props.project}</p>
        <div
          className="h-[28px] w-[28px] p-1 md:p-0.5 hover:bg-gray-400 md:ml-2 md:mr-1 hover:rounded-md hover:cursor-pointer"
          onClick={() => {
            window.open(props.projectSite, "_blank");
          }}
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
          </svg>
        </div>
        <svg
          onClick={() => {
            window.open(props.github, "_blank");
          }}
          className="h-[28px] w-[28px] hover:bg-gray-400 hover:rounded-md p-0.5 hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        {props.github2 && (
          <div
            onClick={() => {
              window.open(props.github2, "_blank");
            }}
            className="flex text-white items-center hover:bg-gray-400 hover:rounded-md cursor-pointer"
          >
            <svg
              className="h-[28px] w-[28px] hover:bg-gray-400 hover:rounded-md p-0.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <p>API</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
