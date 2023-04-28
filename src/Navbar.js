import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
      setPageHeight(window.innerHeight);
    };

    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [pageWidth, pageHeight]);

  return (
    <nav className="z-20 fixed bg-indigo-950 top-0 left-0 right-0 flex items-center justify-between   h-16">
      <ul className="flex flex-row justify-evenly w-full h-full items-center">
        <li
          onClick={() => {
            window.scrollTo({
              top: pageHeight,
              behavior: "smooth",
            });
          }}
          className="h-full flex items-center justify-center text-white w-1/4 text-center hover:bg-gray-700 hover:cursor-pointer hover:bg-opacity-50"
        >
          Skills
        </li>
        <li
          onClick={() => {
            window.scrollTo({
              top: pageHeight * 2,
              behavior: "smooth",
            });
          }}
          className="h-full flex items-center justify-center text-white w-1/4 text-center hover:bg-gray-700 hover:cursor-pointer hover:bg-opacity-50"
        >
          Projects
        </li>
        <li
          onClick={() => {
            window.scrollTo({
              top: pageHeight * 3,
              behavior: "smooth",
            });
          }}
          className="h-full flex items-center justify-center  text-white w-1/4 text-center hover:bg-gray-700 hover:cursor-pointer hover:bg-opacity-50"
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
