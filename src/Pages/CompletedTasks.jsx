// CompletedTasks.js (برای نمایش تسک‌های تکمیل‌شده)
import React from 'react';
import { useSelector } from 'react-redux';
import AllTasksCard from "../Components/AllTasksCard";

function CompletedTasks() {
  const tasks = useSelector(state => state.tasks); // گرفتن تمام تسک‌ها از Redux
  const completedTasks = tasks.filter(task => task.completed); // فیلتر تسک‌های تکمیل‌شده

  return (
    <>
      <AllTasksCard tasks={completedTasks} />
    </>
  );
}

export default CompletedTasks;
