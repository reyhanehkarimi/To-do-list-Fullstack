import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  directories: ["Main"], 
};

const directorySlice = createSlice({
  name: "directories",
  initialState,
  reducers: {
    addDirectory: (state, action) => {
      state.directories.push(action.payload);
    },
    updateDirectory: (state, action) => {
      const { oldDirectory, newDirectory } = action.payload;
      const index = state.directories.indexOf(oldDirectory);
      if (index !== -1) {
        state.directories[index] = newDirectory;
      }
    },
    removeDirectory: (state, action) => {
      state.directories = state.directories.filter(
        (dir) => dir !== action.payload
      );
    },
  },
});

export const { addDirectory, updateDirectory, removeDirectory } =
  directorySlice.actions;

export default directorySlice.reducer;
