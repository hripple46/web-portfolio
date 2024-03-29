import ReactGA from "react-ga";

import "./App.css";
import ProfilePic from "./img/IMG_0040_Blue_Small.png";
import React, { useState, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import FloatingSkills from "./FloatingSkills";
import Projects from "./Projects";
import Contact from "./Contact";
import PopupSkills from "./PopupSkills";
import Navbar from "./Navbar";
import project1 from "./img/Image 4-29-23 at 12.53 PM.jpeg";
import project2 from "./img/Image 4-29-23 at 12.55 PM.jpeg";
import project3 from "./img/Screenshot 2023-07-28 at 1.10.35 PM.png";

function App() {
  const trackingId = "UA-256236245-1";
  ReactGA.initialize(trackingId);
  useEffect(() => {
    // This is to prevent the page from scrolling to the bottom when the page is refreshed
    window.history.scrollRestoration = "manual";
  }, []);
  const ref = useRef(null);
  return (
    <div className="bg-indigo-950 h-full">
      <Navbar />
      <div className=" h-screen pt-28 md:pt-0 md:h-screen md-16 border-b-4 flex flex-col items-center justify-evenly md:justify-around md:flex-row">
        <div className="relative">
          <img
            className="h-[350px] sm:h-[500px] w-auto object-cover"
            src={ProfilePic}
            alt="Profile"
          />
          <FloatingSkills
            style="top-1/4  left-3/4 sm:block hidden"
            skillText={"Dog-Lover"}
          />
          <FloatingSkills
            style="top-16 right-3/4 md:-2rem 0rem  sm:block hidden"
            skillText={"Movie-Nerd"}
          />
          <FloatingSkills
            style="bottom-1/4 right-3/4  sm:block hidden"
            skillText={"Motivated-Programmer"}
          />
        </div>
        <div className="w-3/4 md:w-1/3">
          <p className="hidden md:block text-md mb-12 text-white">Hey There!</p>
          <h1 className="text-2xl md:text-4xl text-white">
            I'm Henry, your go-to web dev wizard, excelling in JavaScript,
            React, CSS, HTML, Node.js, and Express. Let's transform your ideas
            into pixel-perfect digital delights!
          </h1>
        </div>
      </div>
      <div className="h-screen bg-indigo-950 flex flex-col justify-evenly">
        <Element id="scrollToSkills">
          <h1 className="text-4xl text-white text-center">Skills</h1>
        </Element>
        <div className=" flex justify-center">
          <PopupSkills
            title="CSS"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-white rounded-md z-10 "
                viewBox="0 0 342 540"
                version="1.1"
              >
                <g id="#0170baff">
                  <path
                    fill="#0170ba"
                    opacity="1.00"
                    d=" M 0.00 92.46 C 113.92 92.45 227.83 92.44 341.75 92.46 C 335.48 163.31 329.31 234.16 322.78 304.99 C 318.90 350.26 314.90 395.53 310.68 440.77 C 286.37 447.21 262.30 454.55 238.00 461.02 C 215.68 467.57 193.18 473.50 170.85 480.00 L 170.19 480.00 C 148.94 473.68 127.48 468.12 106.23 461.80 C 81.15 455.04 56.29 447.50 31.20 440.77 C 27.93 406.86 24.98 372.93 22.07 339.00 C 16.58 276.31 10.61 213.66 5.33 150.96 C 3.50 132.09 2.19 113.16 0.00 94.33 L 0.00 92.46 M 171.41 120.41 C 171.17 134.02 171.59 147.64 171.17 161.24 C 132.09 161.10 93.00 161.21 53.92 161.25 C 54.59 174.46 56.36 187.58 58.18 200.68 C 94.54 202.03 130.95 200.63 167.31 201.72 C 135.50 215.99 103.30 229.43 71.35 243.40 C 68.61 244.62 65.68 245.54 63.23 247.32 C 63.50 261.83 65.84 276.26 66.87 290.74 C 86.25 290.67 105.62 290.36 125.00 290.33 C 140.53 290.25 156.07 290.56 171.60 290.22 C 170.86 314.08 171.83 337.97 171.10 361.83 C 160.65 360.28 150.33 357.95 139.92 356.10 C 131.71 354.31 123.30 353.38 115.21 351.03 C 114.06 339.58 113.26 328.09 112.24 316.63 C 109.90 315.91 107.42 315.98 105.00 315.94 C 93.26 316.01 81.51 315.90 69.76 316.08 C 70.91 338.11 72.89 360.11 76.26 381.93 C 87.84 384.95 99.44 387.91 111.00 391.06 C 128.71 395.88 146.64 399.89 164.38 404.63 C 166.49 405.08 168.62 405.86 170.81 405.68 C 171.99 420.17 171.08 434.75 171.30 449.28 C 175.39 448.62 179.41 447.61 183.36 446.39 C 216.94 437.27 250.48 427.98 284.04 418.77 C 285.71 405.57 286.49 392.28 287.81 379.05 C 291.30 338.83 294.82 298.61 298.48 258.40 C 302.77 212.40 306.48 166.35 310.80 120.35 C 264.33 120.39 217.87 120.26 171.41 120.41 Z"
                  />
                </g>
                <g id="#29a9dfff">
                  <path
                    fill="#29a9df"
                    opacity="1.00"
                    d=" M 171.41 120.41 C 217.87 120.26 264.33 120.39 310.80 120.35 C 306.48 166.35 302.77 212.40 298.48 258.40 C 294.82 298.61 291.30 338.83 287.81 379.05 C 286.49 392.28 285.71 405.57 284.04 418.77 C 250.48 427.98 216.94 437.27 183.36 446.39 C 179.41 447.61 175.39 448.62 171.30 449.28 C 171.08 434.75 171.99 420.17 170.81 405.68 C 171.11 405.62 171.72 405.50 172.02 405.44 C 203.25 397.60 234.27 388.97 265.43 380.85 C 269.37 336.65 273.74 292.47 276.51 248.18 C 250.01 248.32 223.50 248.24 197.00 248.35 C 193.14 248.37 189.28 248.35 185.44 248.07 C 199.70 240.73 214.70 234.91 229.34 228.36 C 243.39 221.99 257.61 216.02 271.71 209.77 C 274.43 208.52 277.33 207.48 279.72 205.62 C 280.66 202.17 280.61 198.56 280.98 195.03 C 281.79 183.83 283.23 172.69 283.77 161.48 C 246.24 161.18 208.71 161.44 171.17 161.24 C 171.59 147.64 171.17 134.02 171.41 120.41 Z"
                  />
                  <path
                    fill="#29a9df"
                    opacity="1.00"
                    d=" M 171.60 290.22 C 189.72 289.91 207.85 290.40 225.98 290.28 C 224.97 308.81 223.43 327.31 222.47 345.84 C 211.36 349.47 200.08 352.54 188.88 355.90 C 182.91 357.72 176.78 359.16 171.10 361.83 C 171.83 337.97 170.86 314.08 171.60 290.22 Z"
                  />
                </g>
                <g id="#cfcfcfff">
                  <path
                    fill="#cfcfcf"
                    opacity="1.00"
                    d=" M 53.92 161.25 C 93.00 161.21 132.09 161.10 171.17 161.24 C 171.68 204.24 171.04 247.24 171.60 290.22 C 156.07 290.56 140.53 290.25 125.00 290.33 C 105.62 290.36 86.25 290.67 66.87 290.74 C 65.84 276.26 63.50 261.83 63.23 247.32 C 65.68 245.54 68.61 244.62 71.35 243.40 C 103.30 229.43 135.50 215.99 167.31 201.72 C 130.95 200.63 94.54 202.03 58.18 200.68 C 56.36 187.58 54.59 174.46 53.92 161.25 Z"
                  />
                  <path
                    fill="#cfcfcf"
                    opacity="1.00"
                    d=" M 69.76 316.08 C 81.51 315.90 93.26 316.01 105.00 315.94 C 107.42 315.98 109.90 315.91 112.24 316.63 C 113.26 328.09 114.06 339.58 115.21 351.03 C 123.30 353.38 131.71 354.31 139.92 356.10 C 150.33 357.95 160.65 360.28 171.10 361.83 C 172.10 376.35 170.35 390.97 172.02 405.44 C 171.72 405.50 171.11 405.62 170.81 405.68 C 168.62 405.86 166.49 405.08 164.38 404.63 C 146.64 399.89 128.71 395.88 111.00 391.06 C 99.44 387.91 87.84 384.95 76.26 381.93 C 72.89 360.11 70.91 338.11 69.76 316.08 Z"
                  />
                </g>
                <g id="#ffffffff">
                  <path
                    fill="#ffffff"
                    opacity="1.00"
                    d=" M 171.17 161.24 C 208.71 161.44 246.24 161.18 283.77 161.48 C 283.23 172.69 281.79 183.83 280.98 195.03 C 280.61 198.56 280.66 202.17 279.72 205.62 C 277.33 207.48 274.43 208.52 271.71 209.77 C 257.61 216.02 243.39 221.99 229.34 228.36 C 214.70 234.91 199.70 240.73 185.44 248.07 C 189.28 248.35 193.14 248.37 197.00 248.35 C 223.50 248.24 250.01 248.32 276.51 248.18 C 273.74 292.47 269.37 336.65 265.43 380.85 C 234.27 388.97 203.25 397.60 172.02 405.44 C 170.35 390.97 172.10 376.35 171.10 361.83 C 176.78 359.16 182.91 357.72 188.88 355.90 C 200.08 352.54 211.36 349.47 222.47 345.84 C 223.43 327.31 224.97 308.81 225.98 290.28 C 207.85 290.40 189.72 289.91 171.60 290.22 C 171.04 247.24 171.68 204.24 171.17 161.24 Z"
                  />
                </g>
              </svg>
            }
          ></PopupSkills>
          <PopupSkills
            title="HTML"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 580"
                className="h-16 w-16 bg-white rounded-md  z-10"
              >
                <path
                  fill="#e44d26"
                  d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
                />
                <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
                <path
                  fill="#ebebeb"
                  d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
                />
                <path
                  fill="#fff"
                  d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
                />
              </svg>
            }
          />
          <PopupSkills
            title="Tailwind"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-16 w-16 bg-white rounded-md  z-10 "
                viewBox="0 0 56 30"
              >
                <g clip-path="url(#prefix__clip0)">
                  <path
                    fill="#38bdf8"
                    fill-rule="evenodd"
                    d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                    clip-rule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="prefix__clip0">
                    <path fill="#fff" d="M0 0h54v32.4H0z" />
                  </clipPath>
                </defs>
              </svg>
            }
          />
        </div>
        <div className="flex justify-center">
          <PopupSkills
            title="React"
            image={
              <svg
                className="h-16 w-16 bg-white rounded-md z-10 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
              >
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" stroke-width="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            }
          />
          <PopupSkills
            title="JS"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 630 630"
                className="w-16 h-16 bg-white rounded-md z-10 "
              >
                <rect width="630" height="630" fill="#f7df1e" />
                <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
              </svg>
            }
          />
          <PopupSkills
            title="Node.js"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-white rounded-md z-10 "
                version="1.2"
                viewBox="0 0 450 300"
              >
                <defs>
                  <clipPath id="a">
                    <path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68" />
                  </clipPath>
                  <linearGradient
                    id="b"
                    x1="-.348"
                    x2="1.251"
                    gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".3" stop-color="#3E863D" />
                    <stop offset=".5" stop-color="#55934F" />
                    <stop offset=".8" stop-color="#5AAD45" />
                  </linearGradient>
                  <clipPath id="c">
                    <path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0" />
                  </clipPath>
                  <linearGradient
                    id="d"
                    x1="-.456"
                    x2=".582"
                    gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".57" stop-color="#3E863D" />
                    <stop offset=".72" stop-color="#619857" />
                    <stop offset="1" stop-color="#76AC64" />
                  </linearGradient>
                  <clipPath id="e">
                    <path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02" />
                  </clipPath>
                  <linearGradient
                    id="f"
                    x1=".043"
                    x2=".984"
                    gradientTransform="translate(192.862 279.652) scale(97.417)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset=".16" stop-color="#6BBF47" />
                    <stop offset=".38" stop-color="#79B461" />
                    <stop offset=".47" stop-color="#75AC64" />
                    <stop offset=".7" stop-color="#659E5A" />
                    <stop offset=".9" stop-color="#3E863D" />
                  </linearGradient>
                </defs>
                <path
                  fill="#689f63"
                  d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"
                />
                <path
                  fill="#689f63"
                  d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"
                />
                <path
                  fill="#333"
                  fill-rule="evenodd"
                  d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"
                />
                <path
                  fill="#689f63"
                  fill-rule="evenodd"
                  d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"
                />
                <g clip-path="url(#a)" transform="translate(-78.306 -164.016)">
                  <path
                    fill="url(#b)"
                    d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"
                  />
                </g>
                <g clip-path="url(#c)" transform="translate(-78.306 -164.016)">
                  <path
                    fill="url(#d)"
                    d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"
                  />
                </g>
                <g clip-path="url(#e)" transform="translate(-78.306 -164.016)">
                  <path
                    fill="url(#f)"
                    d="M197.02 225.934v107.43h91.683v-107.43zm0 0"
                  />
                </g>
              </svg>
            }
          />
        </div>
        <div className="flex justify-center">
          <PopupSkills
            title="Git"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 272.96 114.01"
                className="h-16 w-16 bg-white rounded-md z-10 "
              >
                <path
                  className="fill-black"
                  d="m163.59,38.806c-5.985,0-10.442,2.9389-10.442,10.012,0,5.3291,2.9375,9.0284,10.12,9.0284,6.0875,0,10.222-3.5869,10.222-9.2485,0-6.416-3.7-9.7915-9.9-9.7915zm-11.97,49.94c-1.4162,1.7382-2.8275,3.585-2.8275,5.7646,0,4.3482,5.545,5.6568,13.162,5.6568,6.31,0,14.905-0.44188,14.905-6.3085,0-3.4869-4.135-3.7028-9.36-4.0304l-15.88-1.0825zm32.201-49.611c1.955,2.5029,4.025,5.9848,4.025,10.989,0,12.075-9.465,19.146-23.169,19.146-3.485,0-6.64-0.43412-8.5962-0.97712l-3.5912,5.7648,10.66,0.65125c18.822,1.1992,29.915,1.7442,29.915,16.208,0,12.514-10.985,19.581-29.915,19.581-19.69,0-27.196-5.0049-27.196-13.598,0-4.8975,2.1762-7.5025,5.9838-11.098-3.5912-1.518-4.7862-4.2362-4.7862-7.1748,0-2.395,1.195-4.5702,3.1562-6.6386,1.9575-2.065,4.1325-4.1348,6.7438-6.5274-5.33-2.6104-9.3562-8.2676-9.3562-16.319,0-12.509,8.2688-21.1,24.91-21.1,4.6788,0,7.5088,0.43062,10.011,1.0874h21.215v9.2446l-10.01,0.76175"
                />
                <path
                  className="fill-black"
                  d="m212.98,19.366c-6.2025,0-9.7912-3.5932-9.7912-9.7964,0-6.1954,3.5888-9.5704,9.7912-9.5704,6.31,0,9.9,3.375,9.9,9.5704,0,6.2031-3.59,9.7964-9.9,9.7964zm-14.036,65.376,0-8.5899,5.55-0.75925c1.5238-0.22075,1.74-0.5445,1.74-2.1802v-31.983c0-1.1942-0.325-1.959-1.4162-2.2828l-5.8738-2.0688,1.1962-8.8086h22.521v45.144c0,1.7438,0.105,1.9595,1.7412,2.1802l5.5488,0.75925v8.5899h-31.008"
                />
                <path
                  className="fill-black"
                  d="m272.97,80.526c-4.68,2.2818-11.532,4.3491-17.736,4.3491-12.945,0-17.839-5.2168-17.839-17.515v-28.5c0-0.65138,0-1.0884-0.87375-1.0884h-7.6138v-9.6816c9.5762-1.0908,13.381-5.8784,14.578-17.736h10.336v15.453c0,0.75875,0,1.0874,0.87125,1.0874h15.338v10.877h-16.209v25.999c0,6.4194,1.525,8.9194,7.3962,8.9194,3.05,0,6.2012-0.75925,8.8125-1.7392l2.94,9.5761"
                />
                <path
                  fill="#f05133"
                  d="M111.78,51.977,62.035,2.2381c-2.8622-2.8648-7.5082-2.8648-10.374,0l-10.329,10.33,13.102,13.102c3.0459-1.0284,6.5371-0.33888,8.9639,2.0884,2.4394,2.4424,3.124,5.9634,2.0698,9.0195l12.628,12.628c3.0551-1.0528,6.58-0.37262,9.0195,2.0712,3.4106,3.4096,3.4106,8.9345,0,12.345-3.4111,3.4116-8.936,3.4116-12.349,0-2.5645-2.5665-3.1988-6.3345-1.8999-9.4942l-11.777-11.777-0.001,30.991c0.8315,0.41162,1.6162,0.961,2.3091,1.6509,3.4096,3.4092,3.4096,8.9331,0,12.348-3.4106,3.4091-8.938,3.4091-12.345,0-3.4101-3.4146-3.4101-8.9385,0-12.348,0.84275-0.84125,1.8179-1.478,2.8584-1.9048v-31.279c-1.041-0.425-2.015-1.057-2.859-1.905-2.583-2.581-3.2051-6.372-1.8804-9.5439l-12.916-12.918-34.106,34.105c-2.8657,2.867-2.8657,7.513,0,10.378l49.742,49.739c2.8638,2.8648,7.5082,2.8648,10.376,0l49.512-49.504c2.8648-2.8662,2.8648-7.5136,0-10.379"
                />
              </svg>
            }
          />
          <PopupSkills
            title="Github"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 bg-white rounded-md fill-black stroke-current text-black z-10 "
                viewBox="0 0 25 22"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  className="fill-black height-12 width-12"
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            }
          />
          <PopupSkills
            title="NPM"
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                className="h-16 w-16 bg-white rounded-md z-10 "
                viewBox="0 0 18 7"
              >
                <path
                  fill="#CB3837"
                  d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"
                />
                <polygon
                  fill="#FFFFFF"
                  points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "
                />
                <path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z" />
                <polygon
                  fill="#FFFFFF"
                  points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "
                />
              </svg>
            }
          />
        </div>
      </div>
      <Element id="scrollToProjects">
        <div className=" overflow-hidden flex flex-col justify-around md:relative  h-screen bg-indigo-950 ">
          <h1 className=" md:absolute  md:mt-8 md:justify-self-center  md:top-0 text-center  text-4xl text-white md:mb-8">
            Projects
          </h1>

          <Projects
            description="In this project, the development of a dynamic web application allowed for an impressive showcase of an author's work while promoting user engagement. The use of Google Firestore underscored my capabilities in robust data management, and the design emphasis on the author's styling and community interaction highlighted a strong grasp of user-centric design and styling principles."
            image={project1}
            github="https://github.com/hripple46/Steves-Page"
            project={"Authors \n Page"}
            projectSite="https://stephentimothyripple.com"
            xPosition={"md:left-0"}
            scrollPosition={990}
            newPosition={"md:top-[80px] -right-1/4"}
            oldPosition={"md:top-full right-full"}
          />
          <Projects
            description="In this endeavor, an IMDb-like web application was developed using React and Firebase, emphasizing my proficiency in frontend development. The integration of features such as a title-based search function and a star rating system demonstrated a solid grasp of creating intuitive and efficient user interfaces."
            image={project2}
            github="https://github.com/hripple46/Ripple-Film-Hub"
            project="Film Hub"
            projectSite="https://hripple46.github.io/Ripple-Film-Hub/"
            xPosition={"md:right-1/3"}
            scrollPosition={1140}
            newPosition={"md:top-1/3  -right-1/4"}
            oldPosition={"md:top-full right-full"}
          />
          <Projects
            description="This project, featuring a single-page web application developed with ExpressJS and ReactJS, highlighted effective use of MongoDB for seamless data handling. The integration of Tailwind CSS and Vite further demonstrated an adeptness with modern design principles and efficient development workflows, all while maintaining a focus on user-friendly interfaces and strong user management practices."
            image={project3}
            github="https://github.com/hripple46/Movie-Social-Client"
            github2="https://github.com/hripple46/Movie-Social-Api"
            project="Movie Groups"
            projectSite="https://movie-groups.com"
            xPosition={"md:right-0"}
            scrollPosition={1340}
            newPosition={"md:top-2/3 md:-mt-[80px] -right-1/4"}
            oldPosition={"md:top-full right-full"}
          />
        </div>
      </Element>
      <Element id="scrollToContact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
