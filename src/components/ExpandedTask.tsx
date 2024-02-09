import { useDispatch, useSelector } from "react-redux";
import { BoardColumn, DropdownType, Task } from "../Interfaces";
import { RootState } from "../redux/store";
import { useState } from "react";
import { createSelector } from "@reduxjs/toolkit";
import Dropdown from "./Dropdown";
import { deleteTask } from "../redux/TaskSlice";
import DeleteModal from "./DeleteModal";

interface ExpandedTaskProps {
  task: Task;
  onClose: () => void;
  updateTask: (task: Task) => void;
}

const ExpandedTask: React.FC<ExpandedTaskProps> = ({
  task,
  onClose,
  updateTask,
}: ExpandedTaskProps) => {
  const { title, description, subTasks, status } = task;
  const [newSubTask, setNewSubTask] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const columns: BoardColumn[] = createSelector(
    (state: BoardColumn[]) => state,
    (columns) =>
      columns.filter((column) => column.boardTitle === task.status.boardTitle)
  )(useSelector((state: RootState) => state.columns));

  return (
    <>
      {showDeleteModal && (
        <dialog
          open={showDeleteModal}
          className="absolute inset-0 rounded-2xl z-10"
        >
          <DeleteModal
            onClose={() => {
              setShowDeleteModal(false);
              setShowDropDown(false);
            }}
            onSubmit={() => {
              dispatch(deleteTask(task));
              setShowDeleteModal(false);
              setShowDropDown(false);
              onClose();
            }}
            type={"task"}
          />
        </dialog>
      )}
      <div className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">{title}</h1>
          <div className="flex gap-2 md:gap-4 items-center">
            {showDropDown && (
              <Dropdown
                type={DropdownType.TASK}
                onDelete={() => {
                  setShowDeleteModal(true);
                }}
              />
            )}
            <button
              onClick={() => setShowDropDown((prev) => !prev)}
              className="font-extrabold text-2xl dark:text-white text-light-primary"
            >
              &#8942;
            </button>
            <button
              type="button"
              onClick={() => {
                setShowDropDown(false);
                onClose();
              }}
            >
              X
            </button>
          </div>
        </div>
        <p className="text-sm dark:text-dark-text-secondary text-light-text-secondary">
          {description}
        </p>
        {subTasks.length > 0 && (
          <div className="flex flex-col gap-2 w-full py-1 px-4 dark:bg-dark-secondary bg-light-secondary">
            {subTasks.map(({ title, completed }) => (
              <div className="flex gap-4 w-full" key={title}>
                <input
                  type="checkbox"
                  id={title}
                  name={title}
                  checked={completed}
                  onChange={(e) => {
                    updateTask({
                      ...task,
                      subTasks: subTasks.map((subtask) =>
                        subtask.title === title
                          ? {
                              ...subtask,
                              completed: e.target.checked,
                            }
                          : subtask
                      ),
                    });
                  }}
                />
                <label htmlFor={title} className="w-full">
                  {title}
                </label>
                <button
                  onClick={() => {
                    updateTask({
                      ...task,
                      subTasks: task.subTasks.filter(
                        (subtask) => subtask.title !== title
                      ),
                    });
                  }}
                  type="button"
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex gap-4 w-full">
          <input
            type="text"
            id="subTask"
            name="subTask"
            value={newSubTask}
            onChange={(e) => {
              setNewSubTask(e.target.value.trim());
            }}
            placeholder="Add new subtask"
            className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary w-full"
          />
        </div>
        <button
          className="dark:bg-light-base bg-dark-base dark:text-light-text-primary text-dark-text-primary w-full rounded-2xl flex items-center justify-center py-2 text-sm font-medium disabled:opacity-30"
          onClick={() => {
            updateTask({
              ...task,
              subTasks: [
                ...task.subTasks,
                {
                  title: newSubTask,
                  completed: false,
                },
              ],
            });
            setNewSubTask("");
          }}
          type="button"
          disabled={newSubTask === ""}
        >
          +Add New Subtask
        </button>
        <div className="flex flex-col gap-2">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={status.title}
            className="dark:bg-dark-base bg-light-base py-1 px-3 rounded-lg border-2 border-gray-400 hover:border-dark-primary"
            onChange={(e) =>
              updateTask({
                ...task,
                status: {
                  ...task.status,
                  title: e.target.value,
                },
              })
            }
          >
            {columns.map((column) => (
              <option key={column.title}>{column.title.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default ExpandedTask;
