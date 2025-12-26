import Link from "next/link";
import { NavMenuList } from "./NavMenuList";

const NavLink = () => {
  return (
    <>
      {NavMenuList.map((navMenu: any, index: number) => (
        <li key={index}>
          <Link href={navMenu.urlPath}>{navMenu.name}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLink;
