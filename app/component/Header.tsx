"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { yznoLogo } from "../constants";
import { ThemeSwitch } from "./ThemeSwitch";
import Sun from "./Sun";
import Nav from "./NavMenu";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 items-center justify-between bg-white shadow-lg pl-[10%] pr-[10%]">
          <Link
            href={"/"}
            className="flex items-center gap-1 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Image src={yznoLogo} width={50} height={50} alt="Owner's Photo" />
          </Link>
          {/* Desktop Nav */}
          {/* Right actions */}
          {/* https://www.figma.com/design/7QhBkas2GH5W6Cv5XfyCeE/Light-Dark-Mode-Toggle-Switch--Community-?node-id=7-3&p=f&t=BKZevTLzusRAxnOK-0 */}
          {/* DEFFFA */}
          {/* E0CDE0 */}

          {/* 011824 */}
          {/* 0C202B */}
          {/* <div>Hello</div>
           */}
          <NavMenu />

          <Sun />
        </div>
      </header>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle theme
      </button>
    </>
  );
};

export default Header;
