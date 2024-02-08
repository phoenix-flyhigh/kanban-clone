import { useEffect, useState } from "react";
import KanbanIcon from "./KanbanIcon";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AddBoard from "./AddBoard";

interface MenuBarProps {
  hideMenu?: () => void;
  currentBoard: string;
  changeBoard: (boardTitle: string) => void;
  addBoard: (boardTitle: string) => void;
}

const MenuBar: React.FC<MenuBarProps> = ({
  hideMenu,
  currentBoard,
  changeBoard,
  addBoard,
}: MenuBarProps) => {
  const boards: string[] = useSelector((state: RootState) => state.boards.all);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <>
      {showModal && (
        <dialog open className="absolute inset-0 rounded-2xl z-10">
          <AddBoard onClose={() => setShowModal(false)} onSubmit={addBoard} />
        </dialog>
      )}
      <div
        className={`flex flex-col min-w-[240px] max-w-[300px] dark:bg-dark-base bg-light-base`}
      >
        <div className="flex gap-4 md:pl-8 pl-4 h-16 items-center">
          <button className="flex place-items-center" onClick={hideMenu}>
            <KanbanIcon />
          </button>
          <h1 className="text-xl dark:text-dark-text-primary font-bold ">
            kanban Clone
          </h1>
        </div>
        <div className="flex flex-col justify-between h-full pb-2">
          <div className="flex flex-col gap-4">
            <p className="md:pl-8 pl-4 pt-4 text-sm dark:text-dark-text-secondary font-medium">
              ALL BOARDS
            </p>
            {boards.map((board) => (
              <button
                key={board}
                onClick={() => changeBoard(board)}
                className={`${currentBoard === board ? "dark:bg-dark-primary bg-light-primary text-dark-text-primary" : "text-light-text-primary"} dark:text-dark-text-primary py-3 mr-8 md:pl-8 pl-4 rounded-r-full`}
              >
                {board}
              </button>
            ))}
            <button
              onClick={() => setShowModal(true)}
              className=" dark:text-dark-primary text-light-primary py-3 mr-8 md:pl-8 pl-4"
            >
              + Create new board
            </button>
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
    </>
  );
};

export default MenuBar;
