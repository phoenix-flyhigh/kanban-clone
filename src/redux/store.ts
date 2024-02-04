import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TaskReducer from './TaskSlice'
import ColumnReducer from './ColumnSlice'

const RootReducer = combineReducers({
    tasks: TaskReducer,
    columns: ColumnReducer
})

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof RootReducer>