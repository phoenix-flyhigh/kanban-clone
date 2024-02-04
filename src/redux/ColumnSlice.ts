import { createSlice } from "@reduxjs/toolkit";

const initialState = ["TODO", "DOING", "DONE"];

const ColumnSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addColumn(state, action: { payload: string }) {
      return [...state, action.payload];
    },
  },
});

export const { addColumn } = ColumnSlice.actions;
const ColumnReducer = ColumnSlice.reducer;
export default ColumnReducer;
