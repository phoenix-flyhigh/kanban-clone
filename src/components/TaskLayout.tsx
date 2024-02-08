import { useSelector } from "react-redux";
import Column from "./Column";
import TaskCard from "./TaskCard";
import { RootState } from "../redux/store";
import { BoardColumn, Task } from "../Interfaces";

interface TaskLayoutProps {
  board: string;
}

const TaskLayout: React.FC<TaskLayoutProps> = ({ board }: TaskLayoutProps) => {
  const tasks: Task[] = useSelector((state: RootState) =>
    state.tasks.filter((task) => task.status.boardTitle === board)
  );
  const columns: BoardColumn[] = useSelector((state: RootState) =>
    state.columns.filter((column) => column.boardTitle === board)
  );

  const colors = [
    "bg-cyan-400",
    "bg-emerald-400",
    "bg-indigo-400",
    "bg-pink-400",
    "bg-indigo-400",
  ];

  const getRandomColor: () => string = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    return colors[randomIndex];
  };

  return (
    <div className="dark:bg-dark-secondary bg-light-secondary h-full flex gap-4 p-4 overflow-y-hidden overflow-x-scroll">
      {columns.map((column) => (
        <Column
          columnTitle={column.title}
          boardTitle={column.boardTitle}
          titleColor={getRandomColor()}
          key={column.title}
        >
          {tasks
            .filter((task) => task.status.title === column.title)
            .map((task) => (
              <TaskCard task={task} key={task.title} />
            ))}
        </Column>
      ))}
      <Column newColumn boardTitle={board}/>
    </div>
  );
};

export default TaskLayout;
