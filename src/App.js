import "./App.css";
import ProfilePic from "./img/IMG_0040_Blue.png";
import React, { useState, useEffect } from "react";
import FloatingSkills from "./FloatingSkills";
import Projects from "./Projects";

function App() {
  useEffect(() => {
    // This is to prevent the page from scrolling to the bottom when the page is refreshed
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="bg-indigo-950 h-full">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between   h-16">
        <ul className="flex flex-row justify-evenly w-full">
          <li className="text-white">Skills</li>
          <li className="text-white">Projects</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
      <div className="h-screen md-16 border-b-4 flex items-center justify-evenly">
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
        <div className="w-1/3">
          <p className="text-sm mb-12 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h1 className="text-4xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
        </div>
      </div>
      <div className="relative h-screen">
        <Projects
          xPosition={"left-0"}
          scrollPosition={200}
          newPosition={"top-0"}
          oldPosition={"top-full"}
        />
        <Projects
          xPosition={"right-1/3"}
          scrollPosition={400}
          newPosition={"top-48"}
          oldPosition={"top-full"}
        />
        <Projects
          xPosition={"right-0"}
          scrollPosition={500}
          newPosition={"top-96"}
          oldPosition={"top-full"}
        />
      </div>
    </div>
  );
}

export default App;
