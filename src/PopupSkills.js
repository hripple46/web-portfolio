import React, { useState } from "react";
const PopupSkills = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="m-2 relative  w-20 h-20 flex justify-center items-center shadow-xl"
    >
      <p className="mb-2 text-white absolute bottom-0 z-0">{props.title}</p>
      <div
        className={`z-10 ${
          hover
            ? "-translate-y-8 transition-transform duration-500 ease-in-out"
            : ""
        }`}
      >
        {props.image}
      </div>
    </div>
  );
};
export default PopupSkills;

//To-do: add a hover effect to the skills where svg translates up and the title appears
