import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import tasksReducer from "./tasksSlice";
import styleReducer from './styleCardsSlice'
import directoryReducer from './directorySlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    darkMode: darkModeReducer,
    style: styleReducer,
    directories: directoryReducer,
    },
});

export default store;
