import { Button, Form, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../redux/tasksSlice";
import "../styles/edit-modal.css";
import "../styles/responsive-page.css";

function EditModal({ show, handleClose, task }) {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
    }
  }, [task]);

  const handleEdit = () => {
    if (task) {
      dispatch(updateTask({ ...task, title })); 
      handleClose(); 
    }
  };

  const modalHeaderStyle = {
    backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
  };

  const modalBodyStyle = {
    backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
  };

  const formControlStyle = {
    backgroundColor: isDarkMode ? "#20174dac" : "white",
    border: "2px solid rgba(120, 53, 153, 0.485)",
    marginBottom: "0",
    color: isDarkMode ? "white" : "black",
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? "rgb(85, 55, 126)" : "rgb(114, 69, 187)",
    border: "none",
    fontSize: "15px",
    width: "60px",
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header style={modalHeaderStyle} closeButton>
        <Modal.Title
          style={{
            backgroundColor: "transparent",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Edit Directory Name
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={modalBodyStyle}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label
              style={{
                backgroundColor: "transparent",
                color: isDarkMode ? "white" : "black",
              }}
            >
              Title
            </Form.Label>
            <Form.Control
              style={formControlStyle}
              type="text"
              placeholder="Enter new title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={isDarkMode ? "dark-placeholder" : "light-placeholder"}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer
        style={{
          justifyContent: "left",
          backgroundColor: isDarkMode
            ? "#11012f"
            : "rgba(201, 206, 250, 0.7)",
          paddingTop: "0",
        }}
      >
        <Button style={buttonStyle} onClick={handleEdit}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
