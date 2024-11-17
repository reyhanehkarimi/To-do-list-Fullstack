import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createRoot } from "react-dom/client"; 
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

