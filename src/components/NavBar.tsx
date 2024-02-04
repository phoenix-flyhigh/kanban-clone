import { useState } from "react";
import KanbanIcon from "./KanbanIcon";
import MenuBar from "./MenuBar";
import AddTask from "./AddTask";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  const toggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <>
      {showModal && (
        <dialog open={showModal} className="absolute inset-0 rounded-2xl">
          <AddTask onClose={() => setShowModal(false)} />
        </dialog>
      )}
      <div
        className={`absolute inset-0 h-screen max-w-[240px] z-10 ${showMenu ? "flex" : "hidden"}`}
      >
        <MenuBar hideMenu={toggleMenu} />
      </div>
      <div className="dark:bg-dark-base bg-light-base h-16 flex justify-between items-center px-4 py-2 relative border-l-[1px] border-zinc-600">
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
          +
          <span className="hidden md:inline" onClick={handleClick}>
            Add new task
          </span>
        </button>
      </div>
    </>
  );
};

export default NavBar;
