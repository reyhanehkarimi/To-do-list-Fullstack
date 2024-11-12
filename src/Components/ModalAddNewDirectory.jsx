/*eslint-disable*/
import { Button, Form, Modal } from 'react-bootstrap';
import React from 'react';

function EditModalNewDirectory({ show, handleClose }) {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "rgba(201, 206, 250, 0.7)", padding: "10px", justifyContent: "center", alignItems: "center" }} closeButton>
        <Modal.Title style={{ backgroundColor: "transparent" }}>Create new directory</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "rgba(201, 206, 250, 0.7)" }}>
        <Form style={{ backgroundColor: "transparent" }}>
          <Form.Group style={{ backgroundColor: "transparent" }} className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ backgroundColor: "transparent" }}>Title</Form.Label>
            <Form.Control style={{ backgroundColor: "white", border: "2px solid rgba(120, 53, 153, 0.485)", marginBottom: "0" }} type="text" placeholder="Enter a directory name" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "left", backgroundColor: "rgba(201, 206, 250, 0.7)", paddingTop: "0" }}>
        <Button style={{ backgroundColor: "rgb(114, 69, 187)", border: "none", fontSize: "15px", width: "68px" }} onClick={handleClose}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModalNewDirectory;
