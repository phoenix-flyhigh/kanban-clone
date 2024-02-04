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
    editTask(state, action: { payload: Task }) {
      const updatedTask = action.payload;
      return state.map((task) =>
        task.title === updatedTask.title ? updatedTask : task
      );
    },
  },
});

export const { fetchTasks, addTask, editTask } = TaskSlice.actions;
const TaskReducer = TaskSlice.reducer;
export default TaskReducer;
