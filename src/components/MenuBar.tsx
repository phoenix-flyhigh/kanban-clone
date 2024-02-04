import { useState } from "react";
import KanbanIcon from "./KanbanIcon";

interface MenuBarProps {
  hideMenu?: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ hideMenu }: MenuBarProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div
      className={`flex flex-col min-w-[240px] max-w-[300px] dark:bg-dark-base bg-light-base border-r-2 border-zinc-600`}
    >
      <div className="flex gap-4 md:pl-8 pl-4 h-16 items-center">
        <button className="flex place-items-center" onClick={hideMenu}>
          <KanbanIcon />
        </button>
        <h1 className="text-xl dark:text-dark-text-primary font-bold ">
          kanban
        </h1>
      </div>
      <div className="flex flex-col justify-between h-full pb-2">
        <div className="flex flex-col">
          <p className="md:pl-8 pl-4 py-4 text-sm dark:text-slate-400 font-medium">
            ALL BOARDS
          </p>
          <div className="dark:bg-dark-primary bg-light-primary text-dark-text-primary py-3 mr-8 md:pl-8 pl-4 rounded-r-full">
            Platform Launch
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center dark:bg-zinc-800 mx-4 px-4 py-3 dark:text-dark-text-primary rounded-lg">
          <span>Dark</span>
          <button
            className="rounded-xl dark:bg-dark-primary bg-light-primary w-7 relative h-4 cursor-pointer"
            onClick={changeTheme}
          >
            <div
              className={`absolute bg-white rounded-full h-3 w-3 top-[2px] left-[2px] ${isDarkTheme ? "" : "translate-x-full"}`}
            ></div>
          </button>
          <span>Light</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
