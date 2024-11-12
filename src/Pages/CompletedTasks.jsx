import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from "../Components/AllTasksCard";

function CompletedTasks() {
  const tasks = useSelector(state => state.tasks); 
  const completedTasks = tasks.filter(task => task.completed); 

  return (
    <>
      <AllTasksCard tasks={completedTasks} />
    </>
  );
}

export default CompletedTasks;
