import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="max-w-5xl w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl inline font-bold border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-5xl w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Mahesh, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am dedicated to creating exceptional software solutions that
              enhance the user experience and make a positive impact on
              businesses. My focus is on delivering customized software that
              meets the unique needs of clients, ensuring optimal functionality
              and user satisfaction. Imagine having a software expert at your
              fingertips to drive innovation and efficiency in your team. I am
              ready to bring my passion for technology and commitment to
              excellence to a dynamic and collaborative work environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
