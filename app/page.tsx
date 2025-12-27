"use client";
import Image from "next/image";
import { yznoPhoto, yznoPhotoBW } from "./constants";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import About from "./section/About";
import Projects from "./section/Projects";
import Experience from "./section/Experience";
import Education from "./section/Education";

export default function Home() {
  const { theme, setTheme } = useTheme();
  // const []
  const pathname = usePathname();

  return (
    <>
      <div className="md:mx-[10%]">
        {/* Home Section */}
        <div className="px-0">
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4">
            <div className="flex-1 flex justify-center">
              {theme === "dark" ? (
                <>
                  <div className="relative w-[300px]">
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
                      className="mt-8 absolute -top-0.5 -right-2 bg-white text-black
                  px-10 py-2 rounded-xl shadow-lg
                  max-w-[160px] text-sm font-semibold"
                    >
                      <p>Hello 👋</p>

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
                      <p className="font-bold text-black">Yar Zar Nay Oo</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative w-[300px]">
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
                      className="mt-8 absolute -top-0.5 -right-2 bg-white text-black
                  px-10 py-2 rounded-xl shadow-lg
                  max-w-[160px] text-sm font-semibold"
                    >
                      <p>Hello 👋</p>

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
                      <p className="font-bold text-white">Yar Zar Nay Oo</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-end items-start">
              <h2 className="text-2xl font-bold">Hi there, I'm</h2>
              <h1>Yar Zar Nay Oo</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus voluptatem itaque animi distinctio provident
                doloremque, minima iure non recusandae sapiente praesentium.
                Aut, ullam? Odio quae quisquam commodi suscipit necessitatibus
                earum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet debitis enim placeat incidunt quae, molestiae nam.
                Debitis quod, error perspiciatis sapiente facilis repellendus
                laboriosam optio laborum magnam exercitationem mollitia sit.
              </p>
              <div className="w-full flex items-center justify-center gap-5">
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
