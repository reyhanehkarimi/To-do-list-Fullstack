import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from "../Components/AllTasksCard";
function MainDirectoryPage() {
  const tasks = useSelector(state => state.tasks);

  return (
    <>
      <AllTasksCard tasks={tasks} />
    </>
  );
}

export default MainDirectoryPage