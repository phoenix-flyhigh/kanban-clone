import { useState } from "react";
import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import TaskLayout from "./components/TaskLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addBoard } from "./redux/BoardSlice";

function App() {
  const boards: string[] = useSelector((state: RootState) => state.boards);
  const dispatch = useDispatch();
  const [currentBoard, setCurrentBoard] = useState<string>(boards[0]);

  const handleBoardChange = (boardTitle: string) => {
    setCurrentBoard(boardTitle);
  };

  const handleAddBoard = (boardTitle: string) => {
    dispatch(addBoard(boardTitle));
    setCurrentBoard(boardTitle);
  };

  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <div className="hidden md:flex">
        <MenuBar
          currentBoard={currentBoard}
          changeBoard={handleBoardChange}
          addBoard={handleAddBoard}
        />
      </div>
      <div className="w-full flex flex-col overflow-scroll">
        <NavBar
          currentBoard={currentBoard}
          changeBoard={handleBoardChange}
          addBoard={handleAddBoard}
        />
        <TaskLayout board={currentBoard} />
      </div>
    </main>
  );
}

export default App;
