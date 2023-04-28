import React, { useState } from "react";
import "./FloatingSkills.css";

const FloatingSkills = (props) => {
  const [spin, setSpin] = useState(false);

  const handleMouseEnter = () => {
    if (!spin) {
      setSpin(true);
      setTimeout(() => setSpin(false), 500); // 500ms is the animation duration
    }
  };

  return (
    <div
      className={`box absolute h-16 w-32 bg-sky-400 rounded-md ${props.style} ${
        spin ? "spin-x-axis" : ""
      }`}
      onMouseEnter={handleMouseEnter}
    >
      <p className="text-white">{props.skillText}</p>
    </div>
  );
};

export default FloatingSkills;
