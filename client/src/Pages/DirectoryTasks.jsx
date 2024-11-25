import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTasksByDirectory } from "../redux/tasksSlice";

const DirectoryTasks = () => {
  const { directory } = useParams(); 
  const tasks = useSelector((state) =>
    selectTasksByDirectory(state, directory)
  );

  return (
    <div>
      <h2>Tasks in "{directory}"</h2>
      {tasks.length === 0 ? (
        <p>No tasks in this directory.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
              <p>Important: {task.important ? "Yes" : "No"}</p>
              <p>Completed: {task.completed ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DirectoryTasks;
