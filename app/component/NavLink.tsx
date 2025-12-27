
import Link from "next/link";
import { NavMenuList } from "./NavMenuList";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const NavLink = () => {
  const {theme, setTheme} = useTheme();
  const [activeHash, setActiveHash] = useState("");
    // Sync on first load / refresh
  useEffect(() => {
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }
  }, []);
  console.log(activeHash)

  console.log(activeHash)
  return (
    <>
      {NavMenuList.map((navMenu: any, index: number) => {
        console.log("ActiveHash:", activeHash);
        console.log("hash:", navMenu.urlPath);
        console.log(activeHash === navMenu.urlPath);
        const isActive = activeHash === navMenu.urlPath;
        // const isActive = activeHash === hash;
        return (
        <li key={index}>
          <Link href={navMenu.urlPath} onClick={() => setActiveHash(navMenu.urlPath)}
          className={`${isActive && theme === "dark" ? "gradient-light font-semibold" : isActive && theme === "light" ? "gradient-dark font-semibold" : " dark:text-gray-300 hover:text-blue-500"} hover:scale-110 transition-transform duration-300 ease-in-out`}
          >{navMenu.name}</Link>
        </li>
      )})}
    </>
  );
};

export default NavLink;
