import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FormModal from "../Components/FormModal";
import DeleteModal from "../Components/DeleteModal";
import { deleteTask, updateTask } from "../redux/tasksSlice";

function DirectoryPage() {
  const [selectedTask, setSelectedTask] = useState(null); 
  const [taskIdToDelete, setTaskIdToDelete] = useState(null); 
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.filter((task) => task.directory === params.id));
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const styleCard = useSelector((state) => state.style.styleCard);

  const handleConfirmDelete = (taskId) => {
    if (taskId) {
      dispatch(deleteTask(taskId)); 
      setShowDeleteModal(false); 
    }
  };

  const handleToggleCompleted = (taskId) => {
    const updatedTask = tasks.find((task) => task._id === taskId);
    if (updatedTask) {
      dispatch(updateTask({ ...updatedTask, completed: !updatedTask.completed }));
    }
  };

  const handleToggleImportant = (taskId) => {
    const updatedTask = tasks.find((task) => task._id === taskId);
    if (updatedTask) {
      dispatch(updateTask({ ...updatedTask, important: !updatedTask.important }));
    }
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setShowFormModal(true);
  };

  const cardStyle = (index, task) => ({
    width: styleCard === "grid" ? "256px" : "95%",
    display: "flex",
    flexDirection: "column",
    minHeight: "14rem",
    marginBottom: "1.5rem",
    marginLeft: styleCard === "grid" ? "0.5rem" : "0",
    backgroundColor: index === 0
      ? "rgb(114, 69, 187)"
      : isDarkMode
      ? "#11012f"
      : "rgba(241, 249, 250, 0.738)",
    color: index === 0 ? "white" : isDarkMode ? "#f1f9fa" : "black",
    borderRadius: "10px",
    boxShadow: isDarkMode
      ? "0 4px 6px rgba(255, 255, 255, 0.1)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
  });

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "left",
          marginTop: "1.5rem",
          marginLeft:"1rem"
        }}
      >
        {tasks.map((task, index) => {
          const deadlineDate = new Date(task.deadline);
          const day = deadlineDate.getDate();
          const month = deadlineDate.toLocaleString("en", { month: "short" });
          const year = deadlineDate.getFullYear();

          return (
            <Card key={index} style={cardStyle(index, task)}>
              <div
                style={{
                  position: "absolute",
                  bottom: styleCard === "grid" ? "14rem" : "10rem",
                  left: styleCard === "grid" ? "11rem" : "53rem",
                  backgroundColor: isDarkMode
                    ? "#20174dac"
                    : "rgba(249, 191, 191, 0.695)",
                  color: isDarkMode ? "white" : "rgb(179, 3, 3)",
                  padding: "1px 6px",
                  borderRadius: "4px",
                  fontSize: "10px",
                  maxWidth: "300px",
                  height: "20px",
                  textAlign: "center",
                }}
              >
                {task.directory}
              </div>

              <Card.Body className="card-body">
                <Card.Title style={{ fontSize: "15px" }}>{task.title}</Card.Title>
                <Card.Subtitle
                  style={{
                    fontSize: "12px",
                    opacity: "0.5",
                    paddingTop: "0.7rem",
                  }}
                >
                  {task.description}
                </Card.Subtitle>

                <Container
                  style={{
                    display: "flex",
                    justifyContent: "left",
                    position: "absolute",
                    bottom: "60px",
                    width: "100%",
                  }}
                >
                  <i className="bi bi-calendar-event me-2"></i>
                  <div style={{ fontSize: "13px" }}>{`${day}/${month}/${year}`}</div>
                </Container>

                <hr
                  style={{
                    borderTop: isDarkMode
                      ? "3px dashed rgba(255, 255, 255, 0.6)"
                      : "3px dashed #ccc",
                    position: "absolute",
                    bottom: "35px",
                    width: "87%",
                  }}
                />

                <Container
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                  }}
                >
                  <Button
                    style={{
                      fontSize: "12px",
                      backgroundColor: task.completed
                        ? "rgb(82, 236, 182)"
                        : "rgb(246, 228, 125)",
                      color: task.completed ? "rgb(3, 74, 3)" : "rgb(135, 74, 1)",
                      borderColor: task.completed
                        ? "rgb(82, 236, 182)"
                        : "rgb(246, 228, 125)",
                      fontWeight: "700",
                      borderRadius: "20px",
                    }}
                    onClick={() => handleToggleCompleted(task._id)}
                  >
                    {task.completed ? "Completed" : "Uncompleted"}
                  </Button>

                  <div>
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        marginRight: "5px",
                      }}
                      onClick={() => handleToggleImportant(task._id)}
                    >
                      <i
                        className={`bi bi-star${task.important ? "-fill" : ""}`}
                        style={{
                          color: index === 0
                            ? "white"
                            : isDarkMode
                            ? "white"
                            : "red",
                        }}
                      ></i>
                    </button>

                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                      }}
                      onClick={() => {
                        setTaskIdToDelete(task._id);
                        setShowDeleteModal(true);
                      }}
                    >
                      <i
                        className="bi bi-trash3-fill"
                        style={{
                          color: index === 0
                            ? "white"
                            : isDarkMode
                            ? "white"
                            : "black",
                        }}
                      ></i>
                    </button>

                    <button
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        color:
                          index === 0 ? "white" : isDarkMode ? "white" : "black",
                        marginRight: "15px",
                      }}
                      onClick={() => handleEditTask(task)}
                    >
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                  </div>
                </Container>
              </Card.Body>
            </Card>
          );
        })}

        <FormModal
          show={showFormModal}
          task={selectedTask}
          handleClose={() => setShowFormModal(false)}
        />

        <DeleteModal
          show={showDeleteModal}
          onHide={() => setShowDeleteModal(false)}
          task={tasks.find((task) => task._id === taskIdToDelete)}
          onConfirmDelete={handleConfirmDelete}
        />
      </Container>
    </>
  );
}

export default DirectoryPage;
