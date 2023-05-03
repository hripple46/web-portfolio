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
      }  transition-all translate ease-in delay-300 h-1/4 w-1/2 md:w-1/3 h-1/3 bg-sky-400 rounded-md ${
        isVisible ? props.newPosition : props.oldPosition
      }
      }`}
    >
      <img
        className="h-full w-full object-cover rounded-md"
        src={props.image}
        alt="project"
      />
      <div className="absolute md:top-full md:mt-1 top-0 w-full  flex md:flex-row flex-col md:left-0 left-full justify-start items-start md:items-center">
        <p className="text-white">{props.project}</p>
        <svg
          className="h-[28px] w-[28px] p-0.5 fill-white hover:bg-gray-400 md:ml-2 md:mr-1 hover:rounded-md "
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
        </svg>
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
      </div>
    </div>
  );
};

export default Projects;
