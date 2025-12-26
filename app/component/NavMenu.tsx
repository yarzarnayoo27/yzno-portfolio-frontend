import { useTheme } from "next-themes";
import NavLink from "./NavLink";

const NavMenu = () => {
const { theme, setTheme } = useTheme();

  return (
    <>
      <nav>
        <ul className="hidden md:flex gap-2">
          <NavLink />
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
