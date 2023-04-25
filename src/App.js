import "./App.css";
import ProfilePic from "./img/IMG_0040_Export_4.png";
import React, { useState } from "react";
import FloatingSkills from "./FloatingSkills";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between  bg-gray-500 h-16"></nav>
      <div className="h-screen md-16 border-b-4 flex items-center justify-evenly">
        <div className="h-3/5 relative">
          <img className="h-full w-auto" src={ProfilePic} alt="Profile" />
          <FloatingSkills style={{ top: "0", left: "-2rem" }} />
          <FloatingSkills style={{ top: "6rem", right: "-2rem" }} />
          <FloatingSkills style={{ bottom: "4rem", left: "0" }} />
        </div>
        <div>
          <h1 className="text-4xl text-white">Hi, I'm Henry</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
