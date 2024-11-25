import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../styles/home.css";
import "../styles/sidebar-right.css";
import AllTasksCard from "../Components/AllTasksCard";

function Home() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode); 
    const tasks = useSelector(state => state.tasks); 
    const allTasks = tasks.filter(task => task); 
  useEffect(() => {
    if (isDarkMode) {
      console.log("Dark mode enabled");
      document.body.classList.add("dark-mode");
    } else {
      console.log("Dark mode disabled");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <AllTasksCard tasks={allTasks} />
    </>
  );
}

export default Home;
