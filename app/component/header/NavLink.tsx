"use client";

import Link from "next/link";
import { NavMenuList } from "./NavMenuList";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const NavLink = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    setMounted(true);
    setActiveHash(window.location.hash || "/");
  }, []);

  if (!mounted) return null;

  const getLinkClasses = (isActive: boolean) => {
    const activeClass =
      isActive && theme === "dark"
        ? "gradient-dark"
        : isActive && theme === "light"
        ? "gradient-light"
        : "";

    const hoverClass = theme === "dark" ? "hover-dark" : "hover-light";

    return `${activeClass} ${hoverClass} transition-transform duration-300 ease-in-out`;
  };

  return (
    <>
      {NavMenuList.map((navMenu, index) => {
        const isActive = activeHash === navMenu.urlPath;
        return (
          <li key={index}>
            <Link
              href={navMenu.urlPath}
              onClick={() => setActiveHash(navMenu.urlPath)}
              className={getLinkClasses(isActive)}
            >
              {navMenu.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLink;
