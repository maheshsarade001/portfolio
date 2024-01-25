import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div className="h-screen w-full  bg-[#0a193f]">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Mahesh Sarade
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A dedicated front-end developer specializing in crafting visually
          appealing and responsive web interfaces. Proficient in HTML, CSS,
          JavaScript and React, I bring innovation and user-centric design to
          every project.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="ml-2 group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
