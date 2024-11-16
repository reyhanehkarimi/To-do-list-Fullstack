import { Button, Form, Modal } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/edit-modal.css';

function EditModal({ show, handleClose }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  // استایل‌های مخصوص دارک مود و لایت مود
  const modalHeaderStyle = {
    backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center"
  };

  const modalBodyStyle = {
    backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)"
  };

  const formControlStyle = {
    backgroundColor: isDarkMode ? "#20174dac" : "white",
    border: isDarkMode ? "2px solid rgba(120, 53, 153, 0.485)" : "2px solid rgba(120, 53, 153, 0.485)",
    marginBottom: "0",
    color: isDarkMode ? "white" : "black", // رنگ متن تغییر کرد
  };

  const buttonStyle = {
    backgroundColor: isDarkMode ? "rgb(85, 55, 126)" : "rgb(114, 69, 187)",
    border: "none",
    fontSize: "15px",
    width: "60px"
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header style={modalHeaderStyle} closeButton>
        <Modal.Title style={{ backgroundColor: "transparent", color: isDarkMode ? "white" : "black" }}>
          Edit directory name
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body style={modalBodyStyle}>
        <Form style={{ backgroundColor: "transparent" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ backgroundColor: "transparent", color: isDarkMode ? "white" : "black" }}>
              Title
            </Form.Label>
            <Form.Control 
              style={formControlStyle} 
              type="text" 
              placeholder="secondary" 
              className={isDarkMode ? "dark-placeholder" : "light-placeholder"}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      
      <Modal.Footer 
        style={{
          justifyContent: "left", 
          backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)", 
          paddingTop: "0"
        }}
      >
        <Button style={buttonStyle} onClick={handleClose}>
          Edit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
