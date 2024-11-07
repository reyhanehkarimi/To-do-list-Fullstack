/*eslint-disable*/
import React, { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
// import "bootstrap-icons/font/bootstrap-icons.css";

const tasks = [
  {
    _id: "1",
    title: "Complete Backend Homework",
    description: "Implement CRUD operations for directory and task collections",
    completed: false,
    important: true,
    deadline: "2024-10-20T00:00:00Z"
  },
  {
    _id: "2",
    title: "Frontend Design",
    description: "Build responsive layout for dashboard",
    completed: false,
    important: false,
    deadline: "2024-11-15T00:00:00Z"
  },
  {
    _id: "3",
    title: "Fix Authentication Bug",
    description: "Resolve login issues for admin accounts",
    completed: true,
    important: true,
    deadline: "2024-12-01T00:00:00Z"
  },
];

function AllTasksCard() {
  const [date, setDate] = useState(new Date());
  const [bgColor, setBgColor] = useState("transparent");
  const [isClicked, setIsClicked] = useState(false); 

  const handleClickColor = () => {
    setIsClicked(!isClicked); 
  };

  const handleClick = () => {
    setBgColor(bgColor === "transparent" ? "red" : "transparent");
  };

  return (
    <Container style={{ justifyContent: "left", alignContent: "center" }} className="d-flex flex-wrap mt-4">
      {tasks.map(task => {
        const deadlineDate = new Date(task.deadline);
        const day = deadlineDate.getDate();
        const month = deadlineDate.toLocaleString("en", { month: "short" });
        const year = deadlineDate.getFullYear();

        return (
          <Card key={task._id} style={{ width: '15rem', height: "14rem", marginBottom: '1rem', marginRight: "1rem", backgroundColor: "rgba(241, 249, 250, 0.738)", position: "relative", border:"none " }}>

            {/* <Card.Header style={{ backgroundColor: "#f1f9fa", fontSize: "10px", fontWeight: "bold", width: "auto", padding: "2px 8px",textAlign: "center"  }}>Main</Card.Header> */}

            <Card.Body>
              <Card.Title style={{ fontSize: "15px" }}>{task.title}</Card.Title>
              <Card.Subtitle style={{ fontSize: "12px", opacity: "0.5", paddingTop:"0.7rem" }} className="mb-2 text-muted">{task.description}</Card.Subtitle>

              <Container style={{ display: "flex", justifyContent: "left", position: "absolute", bottom: "60px", width: "100%" }}>
                <i className="bi bi-calendar-event me-2"></i>
                <div style={{fontSize:"13px"}}>{`${day}/${month}/${year}`}</div>
              </Container>
              <hr style={{ borderTop: "3px dashed #ccc", display: "flex", justifyContent: "left", position: "absolute", bottom: "35px", width: "87%" }} />

              <Container style={{ display: "flex", justifyContent: "space-between", position: "absolute", bottom: "10px", width: "100%" }}>
                <Button
                  style={{
                    fontSize: "12px",
                    backgroundColor: task.completed ? "rgb(82, 236, 182)" : "rgb(246, 228, 125)",
                    color: task.completed ? "rgb(3, 74, 3)" : "rgb(135, 74, 1)",
                    borderColor: task.completed ? "rgb(82, 236, 182)" : "rgb(246, 228, 125)",
                    fontWeight: task.completed ? "700" : "700",
                    borderRadius: task.completed ? "20px" : "20px"
                  }}
                >
                  {task.completed ? "Completed" : "Uncompleted"}
                </Button>
                <div>
                <button
      style={{ border: 'none', backgroundColor: 'transparent' }}
      onClick={handleClickColor} 
    >
      <i
        className="bi bi-star"
        style={{ color: isClicked ? 'red' : 'black' }} 
      ></i>
    </button>
                  <button style={{ border: 'none', backgroundColor: "transparent" }}>
                    <i className="bi bi-trash3-fill" style={{ color: 'black' }}></i>
                  </button>
                  <button style={{ border: 'none', backgroundColor: "transparent" }}>
                    <i className="bi bi-three-dots-vertical"></i>
                  </button>
                </div>
              </Container>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default AllTasksCard;
