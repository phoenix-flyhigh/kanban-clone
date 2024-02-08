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
  },
});

export const { addColumn } = ColumnSlice.actions;
const ColumnReducer = ColumnSlice.reducer;
export default ColumnReducer;
