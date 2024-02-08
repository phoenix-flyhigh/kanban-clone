import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Platform Launch"];

const BoardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action: { payload: string }) {
      return [...state, action.payload];
    },
  },
});

export const { addBoard } = BoardSlice.actions;
const BoardReducer = BoardSlice.reducer;
export default BoardReducer;
