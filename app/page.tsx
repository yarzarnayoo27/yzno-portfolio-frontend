"use client";
import Image from "next/image";
import { yznoPhoto, yznoPhotoBW } from "./constants";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div className="md:mx-[10%]">
        {/* Home Section */}
        <div className="text-black px-0">
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

                    {/* Card attached to the bottom of the image */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
               bg-white rounded-lg shadow-lg p-2 w-[280px] text-center"
                    >
                      <p className="font-bold text-gray-800">Yar Zar Nay Oo</p>
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

                    {/* Card attached to the bottom of the image */}
                    <div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
               bg-white rounded-lg shadow-lg p-2 w-[280px] text-center"
                    >
                      <p className="font-bold text-gray-800">Yar Zar Nay Oo</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex-1 flex flex-col justify-center p-4 text-black">
              <h2>Hi there, I'm</h2>
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

              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Download Resume
              </button>

              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div></div>

        {/* Project Section */}
        <div></div>

        {/* Experience Section */}
        <div></div>

        {/* Education Section */}
        <div></div>
      </div>
    </>
  );
}
