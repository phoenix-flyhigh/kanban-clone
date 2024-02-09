import { createSlice } from "@reduxjs/toolkit";
import { BoardColumn } from "../Interfaces";

const initialState: BoardColumn[] = [
  { title: "TODO", boardTitle: "Platform Launch" },
  { title: "DOING", boardTitle: "Platform Launch" },
  { title: "DONE", boardTitle: "Platform Launch" },
];

const ColumnSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addColumn(state, action: { payload: BoardColumn }) {
      return [...state, action.payload];
    },
    deleteColumn(state, action: { payload: BoardColumn }) {
      const isColumnToDelete = (column: BoardColumn) =>
        column.boardTitle === action.payload.boardTitle &&
        column.title === action.payload.title;

      return state.filter((column) => !isColumnToDelete(column));
    },
    deleteAllColumnsPerBoard(state, action: { payload: string }) {
      return state.filter((column) => column.boardTitle !== action.payload);
    },
  },
});

export const { addColumn, deleteColumn, deleteAllColumnsPerBoard } =
  ColumnSlice.actions;
const ColumnReducer = ColumnSlice.reducer;
export default ColumnReducer;
