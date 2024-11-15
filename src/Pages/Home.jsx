import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/home.css";
import "../styles/sidebar-right.css";
import AllTasksCard from "../Components/AllTasksCard";

function Home() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return <AllTasksCard />;
}

export default Home;
