import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./TaskSlice";
import ColumnReducer from "./ColumnSlice";
import BoardReducer from "./BoardSlice";

const RootReducer = combineReducers({
  tasks: TaskReducer,
  columns: ColumnReducer,
  boards: BoardReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});

export type RootState = ReturnType<typeof RootReducer>;
