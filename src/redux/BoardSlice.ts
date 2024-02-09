import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: ["Platform Launch"],
  current: "Platform Launch",
};

const BoardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard(state, action: { payload: string }) {
      return {
        ...state,
        all: [...state.all, action.payload],
        current: action.payload,
      };
    },
    deleteBoard(state, action: { payload: string }) {
      const isLastBoard = state.all.length === 1;
      const isFirstBoard =
        state.all.findIndex((board) => board === action.payload) === 0;
      return {
        ...state,
        all: state.all.filter((board) => board !== action.payload),
        current: isLastBoard ? "" : isFirstBoard ? state.all[1] : state.all[0],
      };
    },
    updateCurrentBoard(state, action: { payload: string }) {
      return {
        ...state,
        current: action.payload,
      };
    },
  },
});

export const { addBoard, deleteBoard, updateCurrentBoard } = BoardSlice.actions;
const BoardReducer = BoardSlice.reducer;
export default BoardReducer;
