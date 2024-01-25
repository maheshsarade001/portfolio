import React from "react";
import HTML from "../aasets/html.png";
import CSS from "../aasets/css.png";
import TAILWIND from "../aasets/tailwind.png";
import JS from "../aasets/javascript.png";
import TS from "../aasets/typescript.png";
import REACTJS from "../aasets/react.png";
import GITHUB from "../aasets/github.png";
import POSTMAN from "../aasets/Postman.png";

const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            / / These are the some technologies I've worked with.{" "}
          </p>
        </div>

        {/* cards */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={TAILWIND} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={TS} alt="TS icon" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={REACTJS} alt="React JS icon" />
            <p className="my-4">React Js</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={GITHUB} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-pink-300 hover:scale-110 duration-500 pt-2">
            <img className="w-20 mx-auto" src={POSTMAN} alt="Postman icon" />
            <p className="my-4">Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
