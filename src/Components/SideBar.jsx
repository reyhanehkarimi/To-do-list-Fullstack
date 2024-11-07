import { Button, Dropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/sidebar.css';
import EditModal from './EditModal';

function SideBar() {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div style={{ backgroundColor: "rgba(241, 249, 250, 0.738)" }} className="sidebar">
      <h3 style={{ fontSize: "23px", fontWeight: "500", textAlign: "center", marginBottom: "1rem" }}>
        To-Do List
      </h3>
      <Nav className="flex-column p-3">
        <Button style={{ backgroundColor: "rgb(114, 69, 187)" }}>Add new task</Button>

        <Nav.Item className="pb-3 pt-3">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(179, 3, 3)",
                    textDecoration: "none",
                    backgroundColor: "rgba(253, 229, 229, 0.278)",
                    width: "100%", 
                    height: "40px",
                    display: "block",
                    paddingTop: "8.5px",
                    margin: "0"
                  }
                : { textDecoration: "none", color: "black" }
            }
            to="/"
            className="dark"
          >
            All tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(179, 3, 3)",
                    textDecoration: "none",
                    backgroundColor: "rgba(253, 229, 229, 0.278)",
                    width: "100%", 
                    height: "40px",
                    display: "block",
                    paddingTop: "8.5px",
                    margin: "0"
                  }
                : { textDecoration: "none", color: "black" }
            }
            to="/important-tasks"
          >
            Important tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(179, 3, 3)",
                    textDecoration: "none",
                    backgroundColor: "rgba(242, 224, 224, 0.278)",
                    width: "100%", 
                    height: "40px",
                    display: "block",
                    paddingTop: "8.5px",
                    margin: "0"
                  }
                : { textDecoration: "none", color: "black" }
            }
            to="/completed-tasks"
          >
            Completed tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) =>
              isActive
                ? {
                    color: "rgb(179, 3, 3)",
                    textDecoration: "none",
                    backgroundColor: "rgba(253, 229, 229, 0.278)",
                    width: "100%", 
                    height: "40px",
                    display: "block",
                    paddingTop: "8.5px",
                    margin: "0"
                  }
                : { textDecoration: "none", color: "black" }
            }
            to="/uncompleted-tasks"
          >
            Uncompleted tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-1">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "transparent", color: "black", border: "none", padding: "0" }}>
              Directories
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ border: "none", backgroundColor: "transparent" }}>
              <Dropdown.Item style={{ fontSize: '15px', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
                Secondary
                <div style={{ display: 'flex', marginLeft: '5rem' }}>
                  <button onClick={handleEditClick} style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-trash3"></i>
                  </button>
                </div>
              </Dropdown.Item>

              <Dropdown.Item style={{ fontSize: '15px', paddingBottom: "5px" }}>Main</Dropdown.Item>
              <Dropdown.Item>
                <Button style={{ fontSize: '10px', border: "dashed 1px", backgroundColor: "transparent", color: "black", textAlign: 'left' }}>
                  + New
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
      <EditModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default SideBar;
