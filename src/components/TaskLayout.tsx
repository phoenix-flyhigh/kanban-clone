import { TaskStatus } from "../Interfaces";
import Column from "./Column";
import TaskCard from "./TaskCard";

const TaskLayout = () => {
  return (
    <div className="dark:bg-dark-secondary bg-light-secondary h-full flex gap-4 p-4 overflow-y-hidden overflow-x-scroll">
      <Column title="TODO" titleColor="bg-cyan-400" />
      <Column title="TODO" titleColor="bg-emerald-400">
        <TaskCard
          task={{
            title: "Build UI for search",
            description: "",
            status: TaskStatus.TODO,
            subTasks: [{ title: "one", completed: true }],
          }}
        />
        <TaskCard
          task={{
            title: "Build UI for search",
            description: "",
            status: TaskStatus.TODO,
            subTasks: [{ title: "one", completed: true }],
          }}
        />
        <TaskCard
          task={{
            title: "Build UI for search",
            description: "",
            status: TaskStatus.TODO,
            subTasks: [{ title: "one", completed: true }],
          }}
        />
      </Column>
      <Column title="TODO" titleColor="bg-indigo-400" />
      <Column newColumn />
    </div>
  );
};

export default TaskLayout;
