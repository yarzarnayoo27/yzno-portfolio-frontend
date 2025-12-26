import NavLink from "./NavLink";

const NavMenu = () => {
  return (
    <>
      <nav className="text-black">
        <ul className="flex gap-2">
          <NavLink />
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
