import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
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
    <nav className="z-20 fixed bg-indigo-950 top-0 left-0 right-0   h-16">
      <ul className="flex flex-row justify-around  w-full h-full">
        <Link smooth={true} offset={50} duration={500} to="scrollToSkills">
          <li className="h-full flex items-center justify-center text-white w-1/4 text-center  hover:cursor-pointer ">
            Skills
          </li>
        </Link>
        <Link smooth={true} offset={40} duration={500} to="scrollToProjects">
          <li className="h-full flex items-center justify-center text-white w-1/4 text-center  hover:cursor-pointer">
            Projects
          </li>
        </Link>
        <Link smooth={true} offset={40} duration={500} to="scrollToContact">
          <li className="h-full flex items-center justify-center  text-white w-1/4 text-center  hover:cursor-pointer ">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
