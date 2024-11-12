/*eslint-disable*/
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/responsive-page.css'


function TaskCard({ task, index, onToggleCompleted, onToggleImportant }) {
  const deadlineDate = new Date(task.deadline);
  const day = deadlineDate.getDate();
  const month = deadlineDate.toLocaleString("en", { month: "short" });
  const year = deadlineDate.getFullYear();

  const isFirstCard = index === 0;
  
  return (
    <Card
      className='parent-card'
      style={{
        width: '15rem',
        height: "14rem",
        marginBottom: '1rem',
        marginRight: "1rem",
        backgroundColor: isFirstCard ? "rgb(114, 69, 187)" : "rgba(241, 249, 250, 0.738)", 
        color: isFirstCard ? "white" : "black",  
        position: "relative",
        border: "none",
      }}
    >
      <div style={{
        position: "absolute",
        bottom: "14rem",
        left: "11rem",
        backgroundColor: "rgba(249, 191, 191, 0.695)",
        color: "rgb(179, 3, 3)",
        padding: "2px 6px",
        borderRadius: "4px",
        fontSize: "10px",
        width: "50px",
        height: "22px",
        textAlign: "center",
      }}>
        {task.directory}
      </div>
      <Card.Body className='card-body'>
        <Card.Title style={{ fontSize: "15px" }}>{task.title}</Card.Title>
        <Card.Subtitle style={{ fontSize: "12px", opacity: "0.5", paddingTop: "0.7rem" }}>
          {task.description}
        </Card.Subtitle>

        <Container style={{ display: "flex", justifyContent: "left", position: "absolute", bottom: "60px", width: "100%" }}>
          <i className="bi bi-calendar-event me-2"></i>
          <div style={{ fontSize: "13px" }}>{`${day}/${month}/${year}`}</div>
        </Container>

        <hr style={{ borderTop: "3px dashed #ccc", position: "absolute", bottom: "35px", width: "87%" }} />

        <Container style={{ display: "flex", justifyContent: "space-between", position: "absolute", bottom: "10px", width: "100%" }}>
          <Button
            style={{
              fontSize: "12px",
              backgroundColor: task.completed ? "rgb(82, 236, 182)" : "rgb(246, 228, 125)",
              color: task.completed ? "rgb(3, 74, 3)" : "rgb(135, 74, 1)",
              borderColor: task.completed ? "rgb(82, 236, 182)" : "rgb(246, 228, 125)",
              fontWeight: "700",
              borderRadius: "20px"
            }}
            onClick={onToggleCompleted}
          >
            {task.completed ? "Completed" : "Uncompleted"}
          </Button>

          <div>
            <button
              style={{ border: 'none', backgroundColor: 'transparent' }}
              onClick={onToggleImportant}
            >
              <i
                className={`bi bi-star${task.important ? '-fill' : ''}`}
                style={{ color: task.important ? "red" : isFirstCard ? "white" : "black" }}  // برای کارت اول استار قرمز و بقیه مشکی است
              ></i>
            </button>

            <button style={{ border: 'none', backgroundColor: "transparent" }}>
              <i className="bi bi-trash3-fill" style={{ color: isFirstCard ? "white" : "black" }}></i> 
            </button>

            <button style={{ border: 'none', backgroundColor: "transparent", color: isFirstCard ? "white" : "black" }}>
              <i className="bi bi-three-dots-vertical"></i> 
            </button>
          </div>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
