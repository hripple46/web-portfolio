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
      className={`box absolute h-16 w-32 bg-blue-400 rounded-md ${
        spin ? "spin-x-axis" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      style={props.style}
    ></div>
  );
};

export default FloatingSkills;
