import React from "react";

export default function Contact() {
  return (
    <div className="text-white h-screen bg-indigo-950">
      <div className="flex flex-row justify-center content-center">
        <div className="mr-2 mt-4 w-1/3 border-t-8"></div>
        <h1 className="text-4xl text-white">Contact</h1>
        <div className="ml-2 mt-4 w-1/3 border-t-8"></div>
      </div>
      <div className="h-3/4 items-center flex flex-col justify-evenly">
        <div className="flex flex-col items-center">
          <h3 className="md:text-2xl text-xl">Shoot Me An Email:</h3>
          <h1 className="md:text-6xl text-4xl">hhripple@gmail.com</h1>
        </div>
        <div>
          <h1 className="text-4xl">OR</h1>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl">Find Me On Social Media:</h3>
          <h1 className="text-2xl">Github Placeholder</h1>
          <h1 className="text-2xl">LinkedIn Placeholder</h1>
        </div>
      </div>
    </div>
  );
}
