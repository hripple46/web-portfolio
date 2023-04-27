import React from "react";
const PopupSkills = (props) => {
  return (
    <div className="m-2 relative bg-white w-20 h-20 flex justify-center items-center">
      <p className="mb-2 text-black absolute bottom-0 z-0">{props.title}</p>
      {props.image}
    </div>
  );
};
export default PopupSkills;

//To-do: add a hover effect to the skills where svg translates up and the title appears
