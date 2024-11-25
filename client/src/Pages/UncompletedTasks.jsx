import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from "../Components/AllTasksCard";

function uncompletedTasks() {
  const tasks = useSelector(state => state.tasks); 
  const uncompletedTasks = tasks.filter(task => !task.completed); 

  return (
    <>
      <AllTasksCard tasks={uncompletedTasks} />
    </>
  );
}

export default uncompletedTasks;
