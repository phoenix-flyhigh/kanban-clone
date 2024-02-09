import { createSlice } from "@reduxjs/toolkit";
import { BoardColumn, Task } from "../Interfaces";
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
    deleteTask(state, action: { payload: Task }) {
      const taskToDelete = action.payload;
      const isTaskToDelete = (task: Task) =>
        task.title === taskToDelete.title &&
        task.status.title === taskToDelete.status.title &&
        task.status.boardTitle === taskToDelete.status.boardTitle;

      return state.filter((task) => !isTaskToDelete(task));
    },
    deleteTasksPerColumn(state, action: { payload: BoardColumn }) {
      const column = action.payload;
      const isTaskToDelete = (task: Task) =>
        task.status.title === column.title &&
        task.status.boardTitle === column.boardTitle;

      return state.filter((task) => !isTaskToDelete(task));
    },
    deleteTasksPerBoard(state, action: { payload: string }) {
      const boardTitle = action.payload;
      const isTaskToDelete = (task: Task) =>
        task.status.boardTitle === boardTitle;

      return state.filter((task) => !isTaskToDelete(task));
    },
    editTask(state, action: { payload: Task }) {
      const updatedTask = action.payload;
      return state.map((task) =>
        task.title === updatedTask.title &&
        task.status.boardTitle === updatedTask.status.boardTitle
          ? updatedTask
          : task
      );
    },
    editTaskStatus(
      state,
      action: { payload: { task: Task; previousStatus: BoardColumn } }
    ) {
      const { task: updatedTask, previousStatus } = action.payload;

      return state.map((task) =>
        task.title === updatedTask.title &&
        task.status.boardTitle === previousStatus.boardTitle
          ? updatedTask
          : task
      );
    },
  },
});

export const {
  fetchTasks,
  addTask,
  deleteTask,
  deleteTasksPerBoard,
  deleteTasksPerColumn,
  editTask,
  editTaskStatus,
} = TaskSlice.actions;
const TaskReducer = TaskSlice.reducer;
export default TaskReducer;
