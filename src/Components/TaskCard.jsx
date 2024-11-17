import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

function TaskCard({ task, index, onToggleCompleted, onToggleImportant }) {
  const styleCard = useSelector((state) => state.style.styleCard);
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const deadlineDate = new Date(task.deadline);
  const day = deadlineDate.getDate();
  const month = deadlineDate.toLocaleString("en", { month: "short" });
  const year = deadlineDate.getFullYear();

  useEffect(() => {
     isDarkMode; 
  }, [isDarkMode]);

  const isFirstCard = index === 0;

  const containerStyle = {
    display: "flex",
    flexDirection: styleCard === "list" ? "row" : "row",
    flexWrap: styleCard === "grid" ? "nowrap" : "nowrap",
    justifyContent: styleCard === "grid" ? "flex-start" : "center",
    alignItems: styleCard === "list" ? "stretch" : "center",
    gap: styleCard === "grid" ? "1rem" : "0",
    width: styleCard === "grid" ? "28%" : "100%",
    margin: "0",
    padding: "0",
  };

  const cardStyle = {
    width: styleCard === "grid" ? "270px" : "95%",
    display: "flex",
    flexDirection: styleCard === "grid" ? "row" : "column",
    minHeight: styleCard === "grid" ? "14rem" : "10rem",
    marginBottom: "1.5rem",
    marginLeft: styleCard === "grid" ? "1.5rem" : "0.5rem",
    backgroundColor: isFirstCard
      ? "rgb(114, 69, 187)"
      : isDarkMode
      ? "#11012f"  
      : "rgba(241, 249, 250, 0.738)",
    color: isFirstCard ? "white" : isDarkMode ? "#f1f9fa" : "black", 
    borderRadius: "10px",
    boxShadow: isDarkMode
      ? "0 4px 6px rgba(255, 255, 255, 0.1)" 
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "none",
  };

  const deadlineStyle = {
    position: "absolute",
    bottom: styleCard === "grid" ? "14rem" : "10rem",
    left: styleCard === "grid" ? "11rem" : "53rem",
    backgroundColor: isDarkMode
      ? "#20174dac"
      : "rgba(249, 191, 191, 0.695)",
      color: isDarkMode
      ? "white"
      : "rgb(179, 3, 3)",
    // color: "rgb(179, 3, 3)",
    padding: "2px 6px",
    borderRadius: "4px",
    fontSize: "10px",
    width: "50px",
    height: "22px",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <div style={deadlineStyle}>{task.directory}</div>
        <Card.Body className="card-body">
          <Card.Title style={{ fontSize: "15px" }}>{task.title}</Card.Title>
          <Card.Subtitle style={{ fontSize: "12px", opacity: "0.5", paddingTop: "0.7rem" }}>
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
              onClick={onToggleCompleted}
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
  onClick={onToggleImportant}
>
  <i
    className={`bi bi-star${task.important ? "-fill" : ""}`}
    style={{
      color: isFirstCard ? "white" : isDarkMode ? "white" : "black",  
    }}
  ></i>
</button>

<button
  style={{
    border: "none",
    backgroundColor: "transparent",
  }}
>
  <i
    className="bi bi-trash3-fill"
    style={{
      color: isFirstCard ? "white" : isDarkMode ? "white" : "black",  
    }}
  ></i>
</button>

<button
  style={{
    border: "none",
    backgroundColor: "transparent",
    color: isFirstCard ? "white" : isDarkMode ? "white" : "black",  
    marginRight: "15px",
  }}
>
  <i className="bi bi-three-dots-vertical"></i>
</button>

            </div>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TaskCard;
