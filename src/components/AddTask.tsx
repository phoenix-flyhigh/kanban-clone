import { useState } from "react";
import { BoardColumn } from "../Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../redux/TaskSlice";
import { RootState } from "../redux/store";
import { createSelector } from "@reduxjs/toolkit";

interface ExpandedTaskProps {
  board: string;
  onClose: () => void;
}

const AddTask: React.FC<ExpandedTaskProps> = ({
  board,
  onClose,
}: ExpandedTaskProps) => {
  const columns: BoardColumn[] = createSelector(
    (state: BoardColumn[]) => state,
    (columns) => columns.filter((column) => column.boardTitle === board)
  )(useSelector((state: RootState) => state.columns));

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<BoardColumn>(columns[0]);
  const [subTasks, setSubTasks] = useState<string[]>(["", ""]);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        title,
        description,
        status,
        subTasks: subTasks
          .filter((task) => task !== "")
          .map((subtask) => ({
            title: subtask,
            completed: false,
          })),
      })
    );
    onClose();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Add New Task</h1>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-sm font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g Take coffee break"
          className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-sm font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g Its good to take a break"
          rows={3}
          className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subTask" className="text-sm font-semibold">
          Subtasks
        </label>
        {subTasks.map((task, index) => (
          <div className="flex gap-4 w-full" key={index}>
            <input
              type="text"
              id="subTask"
              name="subTask"
              value={task}
              onChange={(e) =>
                setSubTasks([
                  ...subTasks.map((task, taskIndex) =>
                    taskIndex === index ? e.target.value : task
                  ),
                ])
              }
              placeholder="e.g Make coffee"
              className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary w-full"
            />
            <button
              onClick={() =>
                setSubTasks([
                  ...subTasks.slice(0, index),
                  ...subTasks.slice(index + 1),
                ])
              }
              type="button"
            >
              X
            </button>
          </div>
        ))}
        <button
          className="dark:bg-light-base bg-dark-base dark:text-light-text-primary text-dark-text-primary w-full rounded-2xl flex items-center justify-center py-2 text-sm font-medium disabled:opacity-30"
          onClick={() => setSubTasks([...subTasks, ""])}
          type="button"
          disabled={subTasks.includes("")}
        >
          +Add New Subtask
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={status.title}
          onChange={(e) =>
            setStatus((prev) => ({ ...prev, title: e.target.value }))
          }
          className="dark:bg-dark-base bg-light-base py-1 px-3 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
        >
          {columns.map((column) => (
            <option key={column.title}>{column.title.toUpperCase()}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={title === ""}
        className={`dark:bg-dark-primary bg-light-primary dark:text-dark-text-primary text-light-secondary text-md font-semibold w-full rounded-full p-3 disabled:opacity-30`}
      >
        Create Task
      </button>
    </form>
  );
};

export default AddTask;
