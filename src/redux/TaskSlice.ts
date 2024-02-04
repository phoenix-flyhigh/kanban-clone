import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../Interfaces";
import { MockTaskList } from "../MockData";

const initialState = MockTaskList;

const TaskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    fetchTasks(state, action: { payload: Task[] }) {
      return [...state, ...action.payload];
    },
    addTask(state, action: { payload: Task }) {
      return [...state, action.payload];
    },
  },
});

export const { fetchTasks, addTask } = TaskSlice.actions;
const TaskReducer = TaskSlice.reducer;
export default TaskReducer;
