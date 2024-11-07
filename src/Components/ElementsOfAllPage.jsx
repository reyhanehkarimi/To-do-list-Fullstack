/*eslint-disable*/
import React from 'react'
import { Button, Container, Dropdown, Form } from 'react-bootstrap'
import { useState } from 'react';

function ElementsOfAllPage() {
  const [date, setDate] = useState(new Date()); 

  const handleSetDate = () => {
    setDate(new Date(2024, 10, 6)); 
  };

  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short', 
    day: 'numeric',
  });

  return (
    <>
      <Container style={{display:"flex", justifyContent:"space-between"}} className="mt-4">
        <Form>
          <Form.Group controlId="searchBox">
            <div  className="input-group">
              <Form.Control style={{backgroundColor:"rgba(241, 249, 250, 0.738)"}}
                type="text"
                placeholder="Search task"
                aria-label="Search"
              />
              <Button style={{backgroundColor:"rgba(241, 249, 250, 0.738)", border:"none"}}>
                <i style={{color:"black", backgroundColor:"rgba(241, 249, 250, 0.738)"}} className="bi bi-search"></i>        
              </Button>
            </div>
          </Form.Group>
        </Form>
        <div>{formattedDate}</div>
        <Button style={{ backgroundColor: "rgb(114, 69, 187)", width:"140px", height:"37.6px", marginRight:"9rem", position: "relative" }}>
          Add new task

          <Dropdown align="end" style={{ position: "absolute", top: "100%", right: 0, width:"auto" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor:"rgba(241, 249, 250, 0.738)", color: "black", border: "none", paddingRight: "40px" ,paddingLeft: "35px", marginTop :"2.5rem" }}>
              Sort by
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ border: "none", backgroundColor: "white" }}>
              <Dropdown.Item style={{ fontSize: '10px', paddingRight: "0", width: "100%" }} href="#/action-1">Order added</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '10px', paddingRight: "0", width: "100%" }} href="#/action-2">Earlier first</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '10px', paddingRight: "0", width: "100%" }} href="#/action-2">Later first</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '10px', paddingRight: "0", width: "100%" }} href="#/action-2">Completed first</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '10px', paddingRight: "0", width: "100%" }} href="#/action-2">Uncompleted first</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Button>
      </Container>  

      <Container style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", marginTop: "2rem" }}>
        <h4 style={{ marginLeft: "0.8rem" }}>All tasks</h4>  

        <div style={{ display: "flex", marginLeft: "0.8rem", marginTop: "1rem", marginBottom: "1rem" }}>
          <button style={{border:"none", backgroundColor:"transparent", }}>
          <i style={{color:'rgb(114, 69, 187)'}} className="bi bi-list-ul me-2"></i>
          </button>
          <button style={{border:"none", backgroundColor:"transparent"}}>

          <i style={{color:'rgb(114, 69, 187)'}} className="bi bi-grid"></i>
          </button>
        </div>
      </Container>
    </>
  );
}

export default ElementsOfAllPage;
