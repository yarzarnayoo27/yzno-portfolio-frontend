import { useTheme } from "next-themes";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";

const NavMenu = () => {
const { theme, setTheme } = useTheme();

  return (
    <>
      <nav>
        <ul className="hidden md:flex gap-5">
          <NavLink />
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
