import React from 'react';
import ReactDOM from 'react-dom/client'; // تغییر به 'react-dom/client'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './redux/tasksSlice';
import darkModeReducer from './redux/darkModeSlice';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    darkMode: darkModeReducer,
  },
});

// استفاده از createRoot به جای ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
