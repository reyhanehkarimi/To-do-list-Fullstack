import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createRoot } from "react-dom/client"; // تغییر به 'react-dom/client'
import { Provider } from "react-redux";
// import { configureStore } from '@reduxjs/toolkit';
// import tasksReducer from './redux/tasksSlice';
// import darkModeReducer from './redux/darkModeSlice';
import store from "./redux/store";
import App from "./App";

// const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     darkMode: darkModeReducer,
//   },
// });

// استفاده از createRoot به جای ReactDOM.render
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
