"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { yznoLogo } from "../constants";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between bg-white shadow-lg">
          <div>
            <Image src={yznoLogo} width={50} height={50} alt="YZNO Logo" />
          </div>
          {/* Desktop Nav */}
          {/* Right actions */}
        </div>
      </header>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </>
  );
};

export default Navbar;
