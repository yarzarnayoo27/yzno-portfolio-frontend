"use client";
import Image from "next/image";
import { yznoPhoto, yznoPhotoBW } from "./constants";
import { useTheme } from "next-themes";
import About from "./section/About";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Education from "./section/Education";
import TypingLoop from "./component/TypingLoop";

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <div className="md:mx-[10%] md:mt-10">
        {/* Home Section */}
        <div className="px-0">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
            <div className="flex-1 flex justify-center">
              {theme === "dark" ? (
                <>
                  <div className="relative h-fit">
                    {/* Glowing Image */}
                    <Image
                      src={yznoPhotoBW}
                      width={300}
                      height={300}
                      alt="Owner's Photo"
                      className="drop-shadow-[10px_10px_30px_rgba(255,255,200,0.8)] rounded-full"
                    />
                    {/* Comic bubble */}
                    <div
                      className="mt-8 absolute -top-0.5 -right-8 bg-white text-black
                  px-10 py-1 rounded-xl shadow-lg
                  max-w-[260px] text-sm font-semibold"
                    >
                      <p className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-[var(--secondary-gradient)]">
                        3+ Years Experience
                      </p>

                      {/* Bubble tail */}
                      <div
                        className="absolute bottom-0 left-4
                    w-0 h-0
                    border-l-[8px] border-l-transparent
                    border-r-[8px] border-r-transparent
                    border-t-[10px] border-t-white
                    translate-y-full"
                      ></div>
                    </div>

                    {/* Card attached to the bottom of the image */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#facc15] to-[#f59e0b]
               bg-white rounded-lg shadow-lg p-2 w-[280px] text-center"
                    >
                      <p className="font-bold text-black">Front-End Engineer</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative h-fit">
                    {/* Glowing Image */}
                    <Image
                      src={yznoPhoto}
                      width={300}
                      height={300}
                      alt="Owner's Photo"
                      className="drop-shadow-[10px_10px_30px_rgba(255,255,200,0.8)] rounded-full"
                    />
                    {/* Comic bubble */}
                    <div
                      className="mt-8 absolute -top-0.5 -right-8 z-10 bg-white text-black
                  px-10 py-1 rounded-xl shadow-lg
                  max-w-[260px] text-sm font-semibold"
                    >
                      <p className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-[var(--secondary-gradient)]">
                        3+ Years Experience
                      </p>

                      {/* Bubble tail */}
                      <div
                        className="absolute bottom-0 left-4
                    w-0 h-0
                    border-l-[8px] border-l-transparent
                    border-r-[8px] border-r-transparent
                    border-t-[10px] border-t-white
                    translate-y-full"
                      ></div>
                    </div>

                    {/* Card attached to the bottom of the image */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
               bg-white rounded-lg shadow-lg p-2 w-[280px] text-center bg-gradient-to-r from-indigo-500 to-purple-500"
                    >
                      <p className="font-bold text-white">Front-End Engineer</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="mx-[10%] md:mx-0 flex-1 flex flex-col items-start">
              <div className="pl-[10%] mt-3 md:pl-0 mt-0">
                <h2 className="text-2xl">Hi there, I'm</h2>
                <TypingLoop />
              </div>

              <div className="mt-10 ml-10 mb-5 flex flex-col gap-5">
                <p>
                  Designing modern, responsive, interactive, and accessible UIs using MVC, MVVM, and Clean Architecture patterns.
                </p>
                <p>
                  Building Scalable and Maintainable Backend Architectures with RESTful API Design and Microservices.
                </p>
                
              </div>
              <div className="w-full flex items-center gap-5">
                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Download Resume
                  </button>

                  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Download Resume
                  </button>
                </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <About />

        {/* Project Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />
      </div>
    </>
  );
}
