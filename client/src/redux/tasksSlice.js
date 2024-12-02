import { createSlice } from "@reduxjs/toolkit";

const initialTasks = [
  {
    _id: "1",
    title: "Complete Backend Homework",
    description: "Implement CRUD operations for directory and task collections",
    completed: false,
    important: true,
    deadline: "2024-10-20T00:00:00Z",
    directory: "main",
  },
  {
    _id: "2",
    title: "Frontend Design",
    description: "Build responsive layout for dashboard",
    completed: false,
    important: false,
    deadline: "2024-11-15T00:00:00Z",
    directory: "test",
  },
  {
    _id: "3",
    title: "Fix Authentication Bug",
    description: "Resolve login issues for admin accounts",
    completed: true,
    important: true,
    deadline: "2024-12-01T00:00:00Z",
    directory: "main",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasks,
  reducers: {
    toggleCompleted: (state, action) => {
      const task = state.find((task) => task._id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },

    toggleImportant: (state, action) => {
      const task = state.find((task) => task._id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    },

    addTask: (state, action) => {
      const newTask = { ...action.payload, _id: Date.now().toString() };
      if (!state.some((task) => task._id === newTask._id)) {
        state.push(newTask);
        console.log("Task added successfully:", newTask);
      } else {
        console.warn("Duplicate task ID detected:", newTask._id);
      }
    },

    updateTask: (state, action) => {
      const { _id, title, description, completed, important, deadline, directory } = action.payload;
      const index = state.findIndex((task) => task._id === _id);
      if (index !== -1) {
        state[index] = {
          ...state[index],
          title,
          description,
          completed,
          important,
          deadline,
          directory,
        };
      } else {
        console.warn("Task not found for update:", _id);
      }
    },

    deleteTask: (state, action) => {
      console.log("Deleting task with ID:", action.payload);
      return state.filter((task) => task._id !== action.payload);
    },

    markAsCompleted: (state, action) => {
      const task = state.find((task) => task._id === action.payload);
      if (task) {
        task.completed = true;
      }
    },

    markAsUncompleted: (state, action) => {
      const task = state.find((task) => task._id === action.payload);
      if (task) {
        task.completed = false;
      }
    },

    setTaskDirectory: (state, action) => {
      const { _id, directory } = action.payload;
      const task = state.find((task) => task._id === _id);
      if (task) {
        task.directory = directory;
      }
    },
  },
});

export const selectCompletedTasks = (state) =>
  state.tasks.filter((task) => task.completed);

export const selectUncompletedTasks = (state) =>
  state.tasks.filter((task) => !task.completed);

export const selectImportantTasks = (state) =>
  state.tasks.filter((task) => task.important);

export const selectUnimportantTasks = (state) =>
  state.tasks.filter((task) => !task.important);

export const selectTasksByDirectory = (state, directory) =>
  state.tasks.filter((task) => task.directory === directory);

export const {
  toggleCompleted,
  toggleImportant,
  addTask,
  updateTask,
  deleteTask,
  markAsCompleted,
  markAsUncompleted,
  setTaskDirectory,
} = tasksSlice.actions;

export default tasksSlice.reducer;
