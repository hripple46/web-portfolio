import React from "react";
const PopupSkills = (props) => {
  return (
    <div className="bg-white w-20">
      <p className="text-white">{props.title}</p>
      {props.image}
    </div>
  );
};
export default PopupSkills;
