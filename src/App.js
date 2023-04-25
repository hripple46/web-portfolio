import "./App.css";
import ProfilePic from "./img/IMG_0040_Blue.png";
import React, { useState } from "react";
import FloatingSkills from "./FloatingSkills";

function App() {
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
        <div className="h-3/5 relative">
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
    </div>
  );
}

export default App;
