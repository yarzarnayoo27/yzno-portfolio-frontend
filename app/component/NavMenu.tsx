"use client";
import NavLink from "./NavLink";

const NavMenu = () => {

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
