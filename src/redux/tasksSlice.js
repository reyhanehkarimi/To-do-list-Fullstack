// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialTasks = [
  {
    _id: '1',
    title: 'Complete Backend Homework',
    description: 'Implement CRUD operations for directory and task collections',
    completed: false,
    important: true,
    deadline: '2024-10-20T00:00:00Z',
    directory: 'Main',
  },
  {
    _id: '2',
    title: 'Frontend Design',
    description: 'Build responsive layout for dashboard',
    completed: false,
    important: false,
    deadline: '2024-11-15T00:00:00Z',
    directory: 'Main',
  },
  {
    _id: '3',
    title: 'Fix Authentication Bug',
    description: 'Resolve login issues for admin accounts',
    completed: true,
    important: true,
    deadline: '2024-12-01T00:00:00Z',
    directory: 'Main',
  },
  
];

const tasksSlice = createSlice({
  name: 'tasks',
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
  },
});

export const selectCompletedTasks = (state) =>
  state.tasks.filter((task) => task.completed);

export const selectUncompletedTasks = (state) =>
  state.tasks.filter((task) => !task.completed);

export const selectImportantTasks = (state) =>
  state.tasks.filter((task) => task.important);

export const { toggleCompleted, toggleImportant } = tasksSlice.actions;

export default tasksSlice.reducer;
