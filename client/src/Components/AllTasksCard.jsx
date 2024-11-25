import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { toggleCompleted, toggleImportant } from '../redux/tasksSlice';
import TaskCard from './TaskCard';
import '../styles/responsive-page.css'

function AllTasksCard({ tasks = [] }) { 
  const dispatch = useDispatch();

  if (!tasks.length) {
    return <div>No tasks available</div>;
  }

  return (
    <Container className="d-flex flex-wrap mt-4">
      {tasks.map((task, index) => (
        <TaskCard
          key={task._id}
          task={task}
          index={index}
          onToggleCompleted={() => dispatch(toggleCompleted(task._id))}
          onToggleImportant={() => dispatch(toggleImportant(task._id))}
        />
      ))}
    </Container>
  );
}

export default AllTasksCard;
