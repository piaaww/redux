import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSLice/taskSlice'
export const store = configureStore({
  reducer: {
    task: taskSlice
  },
})

