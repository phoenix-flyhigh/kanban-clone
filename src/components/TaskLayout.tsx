import { useSelector } from "react-redux";
import { TaskStatus } from "../Interfaces";
import Column from "./Column";
import TaskCard from "./TaskCard";
import { RootState } from "../redux/store";

const TaskLayout = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const columns = useSelector((state: RootState) => state.columns);

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
        <Column title={column} titleColor={getRandomColor()} key={column}>
          {tasks
            .filter(
              (task) => task.status === (column as keyof typeof TaskStatus)
            )
            .map((task) => (
              <TaskCard task={task} key={task.title} />
            ))}
        </Column>
      ))}
      <Column newColumn />
    </div>
  );
};

export default TaskLayout;
