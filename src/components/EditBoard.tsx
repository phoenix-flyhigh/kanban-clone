import { createSelector } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardColumn } from "../Interfaces";
import { RootState } from "../redux/store";
import { addColumn, deleteColumn } from "../redux/ColumnSlice";
import { deleteTasksPerColumn } from "../redux/TaskSlice";

interface EditBoardProps {
  board: string;
  onClose: () => void;
}

const EditBoard: React.FC<EditBoardProps> = ({
  board,
  onClose,
}: EditBoardProps) => {
  const [newColumn, setNewColumn] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const columns: BoardColumn[] = createSelector(
    (state: BoardColumn[]) => state,
    (columns) => columns.filter((column) => column.boardTitle === board)
  )(useSelector((state: RootState) => state.columns));

  const dispatch = useDispatch();
  const columnExists = (title: string) =>
    columns.find(
      (column) =>
        column.title === title.toUpperCase() && column.boardTitle === board
    );
  return (
    <div className="dark:text-dark-text-primary p-6 flex flex-col gap-4 dark:bg-dark-base bg-light-base w-96 rounded-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">{board}</h1>
        <button
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
      </div>
      <p className="text-md font-bold dark:text-dark-text-primary text-light-text-primary">
        Columns
      </p>
      {columns.length > 0 && (
        <div className="flex flex-col gap-2 w-full ">
          {columns.map(({ title }) => (
            <div
              className="flex gap-4 w-full py-1 px-4  dark:bg-dark-secondary bg-light-secondary"
              key={title}
            >
              <label htmlFor={title} className="w-full">
                {title}
              </label>
              <button
                onClick={() => {
                  dispatch(deleteColumn({ title, boardTitle: board }));
                  dispatch(deleteTasksPerColumn({ title, boardTitle: board }));
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
          id="column"
          name="column"
          value={newColumn}
          onChange={(e) => {
            error && setError(false);
            setNewColumn(e.target.value.trim());
          }}
          placeholder="Add new column"
          className="dark:bg-dark-base py-1 px-4 rounded-lg border-2 border-gray-400 hover:border-dark-primary w-full"
        />
      </div>
      {error && (
        <p className="text-sm font-semibold text-red-500">
          Column already exists
        </p>
      )}
      <button
        className="dark:bg-light-base bg-dark-base dark:text-light-text-primary text-dark-text-primary w-full rounded-2xl flex items-center justify-center py-2 text-sm font-medium disabled:opacity-30"
        onClick={() => {
          if (columnExists(newColumn)) {
            setError(true);
          } else {
            dispatch(
              addColumn({
                title: newColumn.toUpperCase(),
                boardTitle: board,
              })
            );
            setNewColumn("");
          }
        }}
        type="button"
        disabled={newColumn === ""}
      >
        + Add New Column
      </button>
    </div>
  );
};

export default EditBoard;
