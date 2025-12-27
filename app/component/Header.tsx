"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { yznoLogo } from "../constants";
import { ThemeSwitch } from "./ThemeSwitch";
import Link from "next/link";
import NavMenu from "./NavMenu";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <header className={`sticky top-0 z-50 w-full backdrop-blur`}>
        <div
          className={`mx-auto flex h-16 items-center justify-between shadow-lg pl-[10%] pr-[10%]`}
        >
          <Link
            href={"/"}
            className="flex items-center gap-1 hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <Image src={yznoLogo} width={50} height={50} alt="Owner's Photo" />
          </Link>
          
          <NavMenu />

          <ThemeSwitch />
        </div>
      </header>
    </>
  );
};

export default Header;
