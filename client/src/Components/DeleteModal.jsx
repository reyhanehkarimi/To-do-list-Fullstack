import { Button, Modal } from 'react-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/responsive-page.css'

function DeleteModal({ show, onHide, task, onConfirmDelete }) {
    const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

    const handleDelete = () => {
        if (task && task._id) {
          onConfirmDelete(task._id);  
          onHide();
        } else {
          console.error("Task is undefined or missing _id");
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

    const buttonStyle = {
        backgroundColor: isDarkMode ? "rgb(85, 55, 126)" : "rgb(114, 69, 187)",
        border: "none",
        fontSize: "15px",
        maxWidth: "100px",
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header style={modalHeaderStyle} closeButton>
                <Modal.Title style={{ backgroundColor: "transparent", color: isDarkMode ? "white" : "black" }}>
                    Are you sure?
                </Modal.Title>
            </Modal.Header>

            <Modal.Body style={modalBodyStyle}>
                This task will be deleted permanently.
            </Modal.Body>

            <Modal.Footer style={modalBodyStyle}>
                <Button
                    style={{
                        backgroundColor: isDarkMode ? "#20174dac" : "rgba(201, 206, 250, 0.7)",
                        border: "none",
                    }}
                    onClick={onHide}
                >
                    Cancel
                </Button>
                <Button style={buttonStyle} onClick={handleDelete}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
