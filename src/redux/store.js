// store.js
import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import tasksReducer from "./tasksSlice";
import styleReducer from './styleCardsSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    darkMode: darkModeReducer,
    style: styleReducer,
  },
});

export default store;
