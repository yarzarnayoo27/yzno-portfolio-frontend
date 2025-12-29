"use client";

import Image from "next/image";
import Link from "next/link";
import { yznoLogo } from "../../constants";
import { ThemeSwitch } from "./ThemeSwitch";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur shadow-md">
      <div className="mx-auto flex h-16 items-center justify-between px-[10%]">
        <Link
          href="/"
          className="flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <Image
            src={yznoLogo}
            width={50}
            height={50}
            alt="YZNO Logo"
            priority
          />
        </Link>

        <NavMenu />

        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;