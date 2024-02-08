import React, { useState } from "react";
import { Task } from "../Interfaces";
import ExpandedTask from "./ExpandedTask";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/TaskSlice";

interface TaskProps {
  task: Task;
}

const TaskCard: React.FC<TaskProps> = ({ task }: TaskProps) => {
  const { title, subTasks } = task;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dispatch = useDispatch();
  const completedSubTasksCount = subTasks.filter(
    (task) => task.completed
  ).length;
  const totalSubTasksCount = subTasks.length;

  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  const updateTask = (task: Task) => dispatch(editTask(task));

  return (
    <>
      <dialog
        id="task-modal"
        open={showModal}
        className="absolute inset-0 rounded-2xl"
      >
        <ExpandedTask
          task={task}
          onClose={() => setShowModal(false)}
          updateTask={updateTask}
        />
      </dialog>
      <button
        className={`flex flex-col dark:bg-dark-base bg-light-base rounded-lg w-full py-4 px-2 ${isDragging ? "shadow-2xl scale-110" : ""}`}
        onClick={handleClick}
        onDragStart={(e) => {
          setIsDragging(true);
          e.dataTransfer.setData("text", JSON.stringify({ draggedTask: task }));
        }}
        onDragEnd={() => {
          setIsDragging(false);
        }}
        draggable
      >
        <p className="dark:text-dark-text-primary text-light-text-primary font-semibold text-md text-left">
          {title}
        </p>
        {totalSubTasksCount > 0 && (
          <p className="dark:text-dark-text-secondary text-light-text-secondary text-sm">
            {completedSubTasksCount} of {totalSubTasksCount} subtasks
          </p>
        )}
      </button>
    </>
  );
};

export default TaskCard;
