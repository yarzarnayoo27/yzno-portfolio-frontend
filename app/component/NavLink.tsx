"use client";
import Link from "next/link";
import { NavMenuList } from "./NavMenuList";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const NavLink = () => {
  const { theme, setTheme } = useTheme();
  const [activeHash, setActiveHash] = useState("");
  // Sync on first load / refresh
  useEffect(() => {
    console.log("UseState broom broom")
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    } else {
      setActiveHash("/");
    }
  }, []);
  console.log(activeHash);

  console.log(activeHash);
  return (
    <>
      {NavMenuList.map((navMenu: any, index: number) => {
        // console.log("ActiveHash:", activeHash);
        // console.log("hash:", navMenu.urlPath);
        // console.log(activeHash === navMenu.urlPath);
        const isActive = activeHash === navMenu.urlPath;
        // const isActive = activeHash === hash;
        return (
          <li key={index}>
            <Link
              href={navMenu.urlPath}
              onClick={() => setActiveHash(navMenu.urlPath)}
              className={`${
                isActive && theme === "dark"
                  ? "gradient-dark"
                  : isActive && theme === "light"
                  ? "gradient-light"
                  : ""
              } 
              ${
                theme === "dark"
                  ? "hover-dark" : "hover-light"
              } 
              hover:transition-transform duration-300 ease-in-out`}
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
