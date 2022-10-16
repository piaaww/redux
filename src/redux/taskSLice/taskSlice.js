import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    editTask: (state, action) => {
      return state.map(el=>el.id===action.payload.id ? action.payload: el)
    },
  },
});

export const { addTask, deleteTask, editTask} = taskSlice.actions;

export default taskSlice.reducer;
