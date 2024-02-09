import MenuBar from "./components/MenuBar";
import NavBar from "./components/NavBar";
import TaskLayout from "./components/TaskLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addBoard, deleteBoard, updateCurrentBoard } from "./redux/BoardSlice";
import { deleteAllColumnsPerBoard } from "./redux/ColumnSlice";
import { deleteTasksPerBoard } from "./redux/TaskSlice";

function App() {
  const currentBoard: string = useSelector(
    (state: RootState) => state.boards.current
  );
  const dispatch = useDispatch();

  const handleBoardChange = (boardTitle: string) => {
    dispatch(updateCurrentBoard(boardTitle));
  };

  const handleAddBoard = (boardTitle: string) => {
    dispatch(addBoard(boardTitle));
  };

  const handleDeleteBoard = (boardTitle: string) => {
    dispatch(deleteBoard(boardTitle));
    dispatch(deleteAllColumnsPerBoard(boardTitle));
    dispatch(deleteTasksPerBoard(boardTitle));
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
          deleteBoard={handleDeleteBoard}
        />
        <TaskLayout board={currentBoard} />
      </div>
    </main>
  );
}

export default App;
