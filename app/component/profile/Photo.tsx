"use client";

import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface PhotoProps {
  photoLight: StaticImageData;
  photoDark?: StaticImageData;
  role?: string;
  experience?: string;
  width?: number;
}

const Photo: React.FC<PhotoProps> = ({
  photoLight,
  photoDark,
  role = "Front-End Engineer",
  experience = "3+ Years Experience",
  width = 300,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const isDark = theme === "dark";

  const displayPhoto = isDark && photoDark ? photoDark : photoLight;

  return (
    <div className="relative h-fit">
      <Image
        src={displayPhoto}
        width={width}
        height={width}
        alt="Owner's Photo"
        className="drop-shadow-[10px_10px_30px_rgba(255,255,200,0.8)] rounded-full"
      />

      <div
        className="mt-8 absolute -top-0.5 -right-8 bg-white text-black
                  px-10 py-1 rounded-xl shadow-lg
                  max-w-[260px] text-sm font-semibold"
      >
        <p className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-[var(--secondary-gradient)]">
          {experience}
        </p>

        <div
          className="absolute bottom-0 left-4
                    w-0 h-0
                    border-l-[8px] border-l-transparent
                    border-r-[8px] border-r-transparent
                    border-t-[10px] border-t-white
                    translate-y-full"
        />
      </div>

      <div
        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2
                    rounded-lg shadow-lg p-2 w-[280px] text-center
                    ${
                      isDark
                        ? "bg-gradient-to-r from-[#d97706] to-[#eab308]"
                        : "bg-gradient-to-r from-indigo-500 to-purple-500"
                    }`}
      >
        <p className={`font-bold ${isDark ? "text-black" : "text-white"}`}>
          {role}
        </p>
      </div>
    </div>
  );
};

export default Photo;
