import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from '../Components/AllTasksCard';

function ImportantTasks() {
  const importantTasks = useSelector(state => state.tasks.filter(task => task.important));

  return (
    <div>
      <h3>Important Tasks</h3>
      <AllTasksCard tasks={importantTasks} />
    </div>
  );
}

export default ImportantTasks;
