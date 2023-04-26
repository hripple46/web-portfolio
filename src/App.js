import "./App.css";
import ProfilePic from "./img/IMG_0040_Blue.png";
import React, { useState, useEffect } from "react";
import FloatingSkills from "./FloatingSkills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  useEffect(() => {
    // This is to prevent the page from scrolling to the bottom when the page is refreshed
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="bg-indigo-950 h-full">
      <nav className="z-10 fixed bg-indigo-950 top-0 left-0 right-0 flex items-center justify-between   h-16">
        <ul className="flex flex-row justify-evenly w-full">
          <li className="text-white">Skills</li>
          <li className="text-white">Projects</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
      <div className="h-screen pt-28 md:pt-0 md:h-screen md-16 border-b-4 flex flex-col items-center justify-evenly md:flex-row">
        <div className="h-3/5 relative w-[360px] ">
          <img className="h-full w-auto" src={ProfilePic} alt="Profile" />
          <FloatingSkills
            style={{ top: "0", left: "-2rem" }}
            skillText={"React"}
          />
          <FloatingSkills
            style={{ top: "6rem", right: "-2rem" }}
            skillText={"JavaScript"}
          />
          <FloatingSkills
            style={{ bottom: "4rem", left: "0" }}
            skillText={"CSS"}
          />
        </div>
        <div className="w-3/4 md:w-1/3">
          <p className="hidden md:block text-sm mb-12 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-2xl md:text-4xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
      </div>
      <div className=" flex flex-col justify-around md:relative h-screen bg-indigo-950 ">
        <h1 className=" md:absolute  md:justify-self-center  md:top-0 text-center  text-4xl text-white md:mb-8">
          Projects
        </h1>

        <Projects
          project="Project 1"
          xPosition={"md:left-0"}
          scrollPosition={200}
          newPosition={"md:top-[80px] -right-1/4"}
          oldPosition={"md:top-full right-full"}
        />
        <Projects
          project="Project 2"
          xPosition={"md:right-1/3"}
          scrollPosition={400}
          newPosition={"md:top-[272px] -right-1/4"}
          oldPosition={"md:top-full right-full"}
        />
        <Projects
          project="Project 3"
          xPosition={"md:right-0"}
          scrollPosition={500}
          newPosition={"md:top-[464px] -right-1/4"}
          oldPosition={"md:top-full right-full"}
        />
      </div>
      <Contact />
    </div>
  );
}

export default App;
