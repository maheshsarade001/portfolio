import React, { useState } from "react";
import WorkImg from "../aasets/projects/workImg.jpeg";
import YoutubeSS from "../aasets/projects/youtubeSS.png";
import Taxiwala from "../aasets/projects/taxiwala-1.png";

const Work = () => {
  const [activeTab, setActiveTab] = useState("Experience");
  const [showProjects, setShowProjects] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Projects") {
      setShowProjects(true);
    } else {
      setShowProjects(false);
    }
  };

  return (
    <div name="work" className="w-full h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-5xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="sticky pb-8 flex gap-4 items-center">
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline text-gray-300">
            Work :
          </p>
          <div>
            <button
              className={`md:px-6 px-2 py-2 border ${
                activeTab === "Experience" ? "bg-pink-600" : "bg-slate-600"
              } md:text-xl ml-4 font-bold`}
              onClick={() => handleTabClick("Experience")}
            >
              Experience
            </button>
            <button
              className={`md:px-6 px-2 py-2 border ${
                activeTab === "Projects" ? "bg-pink-600" : "bg-slate-600"
              } md:text-xl ml-4 font-bold`}
              onClick={() => handleTabClick("Projects")}
            >
              Projects
            </button>
          </div>
        </div>
        {!showProjects && (
          <div>
            <p className="pb-6 pt-2">
              / / Checkout my previous work experience
            </p>
            <div>
              <ul>
                <li className="space-y-4">
                  <p className="md:text-2xl ">
                    Company Name :{"  "}
                    <span className="font-bold">
                      iNeuron Intelligence Private Limited (Physics Wallah)
                    </span>
                  </p>
                  <p className="text-xl ">
                    Position :{" "}
                    <span className="font-semibold">
                      {" "}
                      Senior Associate Developer (1.5 Years)
                    </span>
                  </p>
                  <p>
                    Implemented UI development expertise, collaborating closely
                    with the main development team as an Associate Developer.
                    Enhanced UI components, resolved numerous bugs, and actively
                    contributed to the advancement of multiple projects under
                    the mentorship of senior developers, showcasing proficiency
                    and achieving project success.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        )}
        {showProjects && (
          <div>
            <p className="pb-6 pt-2">/ / Check out some of my recent work</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* project cards */}
              {showProjects && (
                <>
                  {/* Card */}
                  <div
                    style={{ backgroundImage: `url(${YoutubeSS})` }}
                    className="shadow-lg  shadow-pink-300 group container rounded-md flex justify-center items-center mx-auto content-div"
                  >
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font-bold text-white tracking-wider ">
                        Youtube Clone
                      </span>
                      <div className="pt-8 text-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://youtube-clone-wheat-iota.vercel.app/"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Demo
                          </button>
                        </a>
                        <a
                          href="https://github.com/maheshsarade001/youtube-clone"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  <div
                    style={{ backgroundImage: `url(${Taxiwala})` }}
                    className="shadow-lg  shadow-pink-300 group container rounded-md flex justify-center items-center mx-auto content-div"
                  >
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font-bold text-white tracking-wider ">
                        Taxiwala
                      </span>
                      <div className="pt-8 text-center">
                        <a
                          href="https://portfolio-maheshsarade001.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Demo
                          </button>
                        </a>
                        <a
                          href="https://github.com/maheshsarade001/portfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                  <div
                    style={{ backgroundImage: `url()` }}
                    className="shadow-lg  shadow-pink-300 group container rounded-md flex justify-center items-center mx-auto content-div"
                  >
                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100">
                      <span className="text-2xl font-bold text-white tracking-wider ">
                        React Js Application
                      </span>
                      <div className="pt-8 text-center">
                        <a href="/" target="_blank" rel="noopener noreferrer">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Demo
                          </button>
                        </a>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                          <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card */}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
