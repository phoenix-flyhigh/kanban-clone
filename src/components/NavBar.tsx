import { useState } from "react";
import KanbanIcon from "./KanbanIcon";
import MenuBar from "./MenuBar";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  return (
    <>
      <div
        className={`absolute inset-0 h-screen max-w-[240px] z-10 ${showMenu ? "flex" : "hidden"}`}
      >
        <MenuBar hideMenu={toggleMenu} />
      </div>
      <div className="dark:bg-dark-base bg-light-base h-16 flex justify-between items-center px-4 py-2 relative">
        <button
          className="md:hidden flex justify-center items-center"
          onClick={toggleMenu}
        >
          <KanbanIcon />
        </button>
        <p className="text-lg font-bold dark:text-dark-text-primary ">
          Platform Launch
        </p>
        <button className="rounded-2xl dark:bg-dark-primary bg-light-primary text-dark-text-primary text-md md:py-2 m-0 flex items-center justify-center gap-1 px-4">
          +<span className="hidden md:inline">Add new task</span>
        </button>
      </div>
    </>
  );
};

export default NavBar;
