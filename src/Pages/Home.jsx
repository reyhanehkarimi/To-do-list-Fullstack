import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from "../Components/AllTasksCard";
import "../styles/home.css";


function Home() {
  const tasks = useSelector(state => state.tasks);

  return (
    <>
      <AllTasksCard tasks={tasks} />
    </>
  );
}

export default Home;
