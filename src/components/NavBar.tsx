import { useState } from "react";
import KanbanIcon from "./KanbanIcon";
import MenuBar from "./MenuBar";
import AddTask from "./AddTask";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { BoardColumn } from "../Interfaces";

interface NavBarProps {
  currentBoard: string;
  changeBoard: (boardTitle: string) => void;
  addBoard: (boardTitle: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  currentBoard,
  changeBoard,
  addBoard,
}: NavBarProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const columns: BoardColumn[] = useSelector((state: RootState) =>
    state.columns.filter((column) => column.boardTitle === currentBoard)
  );
  console.log(columns);

  return (
    <>
      {showModal && (
        <dialog open className="absolute inset-0 rounded-2xl">
          <AddTask onClose={() => setShowModal(false)} board={currentBoard} />
        </dialog>
      )}
      <div
        className={`absolute inset-0 h-screen max-w-[240px] z-10 ${showMenu ? "flex" : "hidden"}`}
      >
        <MenuBar
          hideMenu={toggleMenu}
          currentBoard={currentBoard}
          changeBoard={changeBoard}
          addBoard={addBoard}
        />
      </div>
      <div className="dark:bg-dark-base bg-light-base h-16 flex justify-between items-center px-4 py-2 relative border-l-[1px] border-zinc-600">
        <button
          className="md:hidden flex justify-center items-center"
          onClick={toggleMenu}
        >
          <KanbanIcon />
        </button>
        <p className="text-lg font-bold dark:text-dark-text-primary text-light-text-primary">
          {currentBoard}
        </p>
        <button
          onClick={handleClick}
          disabled={columns.length <= 0}
          className="rounded-2xl dark:bg-dark-primary bg-light-primary disabled:opacity-30 text-dark-text-primary text-md md:py-2 m-0 flex items-center justify-center gap-1 px-4"
        >
          +<span className="hidden md:inline">Add new task</span>
        </button>
      </div>
    </>
  );
};

export default NavBar;
