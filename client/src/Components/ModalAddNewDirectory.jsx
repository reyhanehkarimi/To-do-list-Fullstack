import { Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/responsive-page.css";

function EditModalNewDirectory({ show, handleClose, onCreateDirectory }) {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const [directoryName, setDirectoryName] = useState("");
  const [error, setError] = useState("");

  console.log({ onCreateDirectory });
  

  const handleCreate = () => {
    if (!directoryName.trim()) {
      setError("Directory name is required.");
      return;
    }
    if (directoryName.trim().length < 3) {
      setError("Directory name must be at least 3 characters long.");
      return;
    }

    onCreateDirectory(directoryName.trim());
    resetForm();
    handleClose(); 
  };

  const resetForm = () => {
    setDirectoryName(""); 
    setError(""); 
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleCreate();
    }
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header
        style={{
          backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
        }}
        closeButton
      >
        <Modal.Title style={{ color: isDarkMode ? "white" : "black" }}>
          Create new directory
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: isDarkMode ? "white" : "black" }}>
              Title
            </Form.Label>
            <Form.Control
              style={{
                backgroundColor: isDarkMode ? "#20174dac" : "white",
                border: "2px solid rgba(120, 53, 153, 0.485)",
                color: isDarkMode ? "white" : "black",
              }}
              type="text"
              placeholder="Enter a directory name"
              value={directoryName}
              onChange={(e) => setDirectoryName(e.target.value)}
              onKeyPress={handleKeyPress} 
            />
            {error && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {error}
              </p>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "left",
          backgroundColor: isDarkMode ? "#11012f" : "rgba(201, 206, 250, 0.7)",
        }}
      >
        <Button
          onClick={handleCreate}
          style={{
            backgroundColor: isDarkMode
              ? "rgb(114, 69, 187)"
              : "rgb(114, 69, 187)",
            border: "none",
          }}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModalNewDirectory;
