import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  directories: ["Main"], 
};

const directorySlice = createSlice({
  name: "directories",
  initialState,
  reducers: {
    addDirectory: (state, action) => {
      console.log("Adding directory:", action.payload);
      if (!state.directories.includes(action.payload)) {
        state.directories.push(action.payload); 
      } else {
        console.warn("Directory already exists:", action.payload); 
      }
    },
    updateDirectory: (state, action) => {
      const { oldDirectory, newDirectory } = action.payload;
      console.log(`Updating directory from ${oldDirectory} to ${newDirectory}`);
      const index = state.directories.indexOf(oldDirectory);
      if (index !== -1) {
        state.directories[index] = newDirectory;
      } else {
        console.warn("Directory not found:", oldDirectory); 
      }
    },
    removeDirectory: (state, action) => {
      console.log("Removing directory:", action.payload); 
      state.directories = state.directories.filter(
        (dir) => dir !== action.payload
      );
    },
  },
});

export const { addDirectory, updateDirectory, removeDirectory } =
  directorySlice.actions;

export default directorySlice.reducer;
