/*eslint-disable*/
import React, { useState } from 'react';
import { Button, Container, Dropdown, Form } from 'react-bootstrap';
import EditModal from './EditModal'; 
import '../styles/sidebar.css';

function ElementsOfAllPage() {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false); 

  const handleSetDate = () => {
    setDate(new Date(2024, 10, 6));
  };

  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
    <div></div>
      <Container style={{ display: "flex", justifyContent: "space-between",marginLeft:"1rem"  }} className="mt-2 parent-header">
        <Form style={{display:"flex"}}>
          <Form.Group className='search-input-header' style={{ position:"relative",display:"flex"}}>
            <Form.Control
              style={{
                backgroundColor: "rgba(241, 249, 250, 0.738)",
                paddingRight: "2.5rem",
                fontSize: "15px",
                display:"flex",
                left:"-20rem"
              }}
              type="text"
              placeholder="Search task"
              aria-label="Search"
            />
            <Button
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "transparent",
                border: "none",
                padding: "0",
                display:"flex"
              }}
            >
              <i
                style={{ color: "black", fontSize: "1rem", opacity: "0.5" }}
                className="bi bi-search"
              ></i>
            </Button>
          </Form.Group>
        </Form>
        <div  style={{display:"flex"}}>{formattedDate}</div>
        <Button
          className='add-new-task-header'
          style={{
            backgroundColor: "rgb(114, 69, 187)",
            width: "160px",
            height: "37.6px",
            border: "none",
            marginRight:"2rem"
          }}onClick={handleShowModal} 
        >
          Add new task
        </Button>
          <Dropdown  className='Dropdown.Toggle' style={{ position: "absolute",top:"2.8rem", right: "17.8rem",width:"auto", height:"auto" }}>
            <Dropdown.Toggle  style={{ backgroundColor: "rgba(241, 249, 250, 0.738)", color: "black", border: "none", paddingRight: "60px", paddingLeft: "35px", marginTop: "2.5rem", textAlign: "center" }}>
              Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ border: "none", backgroundColor: "rgba(241, 249, 250, 0.738)" }}>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Sort by</Dropdown.Item>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-1">Order added</Dropdown.Item>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-2">Earlier first</Dropdown.Item>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Later first</Dropdown.Item>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Completed first</Dropdown.Item>
              <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Uncompleted first</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Container>

      <Container className='below-header' style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", marginTop: "2rem",marginLeft:"1rem" }}>
        <h4 className='count-task' style={{ marginLeft: "0.8rem" }}>All tasks</h4>

        <div style={{ display: "flex", marginLeft: "0.8rem", marginTop: "1rem", marginBottom: "1rem" }}>
          <button style={{ border: "none", backgroundColor: "transparent", }}>
            <i style={{ color: 'rgb(114, 69, 187)' }} className="bi bi-list-ul me-2"></i>
          </button>
          <button style={{ border: "none", backgroundColor: "transparent" }}>
            <i style={{ color: 'rgb(114, 69, 187)' }} className="bi bi-grid"></i>
          </button>
        </div>
      </Container>

      <EditModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default ElementsOfAllPage;
