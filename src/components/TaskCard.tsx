import React, { useState } from "react";
import { Task, TaskStatus } from "../Interfaces";
import ExpandedTask from "./ExpandedTask";

interface TaskProps {
  task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }: TaskProps) => {
  const { title, subTasks } = task;
  const [showModal, setShowModal] = useState<boolean>(false);

  const completedSubTasksCount = subTasks.filter(
    (task) => task.completed
  ).length;
  const totalSubTasksCount = subTasks.length;

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <dialog
        id="task-modal"
        open={showModal}
        className="absolute inset-0 rounded-2xl"
      >
        <ExpandedTask
          task={{
            title: "Build UI for search",
            description: "",
            status: TaskStatus.TODO,
            subTasks: [{ title: "one", completed: true }],
          }}
          onClose={() => setShowModal(false)}
        />
      </dialog>
      <button
        className="flex flex-col dark:bg-dark-base bg-light-base rounded-lg w-full py-4 px-2"
        onClick={handleClick}
      >
        <p className="dark:text-dark-text-primary text-light-text-primary font-semibold text-md">
          {title}
        </p>
        <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm">
          {completedSubTasksCount} of {totalSubTasksCount} subtasks
        </p>
      </button>
    </>
  );
};

export default TaskCard;
