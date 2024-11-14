import { Button, Dropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/sidebar.css';
import EditModal from './EditModal';
import EditModalNewDirectory from './ModalAddNewDirectory'

function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [showNewDirectoryModal, setShowNewDirectoryModal] = useState(false);

  const handleEditClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleNewDirectoryClick = () => setShowNewDirectoryModal(true);
  const handleCloseNewDirectory = () => setShowNewDirectoryModal(false);

  

  return (
    <div style={{ backgroundColor: "rgba(241, 249, 250, 0.738)" }} className="sidebar">
      <h3 style={{ fontSize: "23px", fontWeight: "500", textAlign: "center", marginBottom: "1rem" }}>
        To-Do List
      </h3>
      <Nav className="flex-column p-3">
        <Button className='btn-add-task-sidebar' style={{ backgroundColor: "rgb(114, 69, 187)", border:"none" }}>Add new task</Button>

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
            className="nav-link-item"
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
            className="nav-link-item"

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
            className="nav-link-item"

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
            className="nav-link-item"

          >
            Uncompleted tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-1">
          <Dropdown>
            <Dropdown.Toggle  className="nav-link-item"  style={{ backgroundColor: "transparent", color: "black", border: "none", padding: "0" }}>
              Directories
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ border: "none", backgroundColor: "transparent" }}>
              <Dropdown.Item className='nav-link-item' as={NavLink} to="/secondary-directory" style={{color:"black", fontSize: '15px', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between',backgroundColor: "transparent" }}>
                Secondary
                <div style={{ display: 'flex'}}>
                  <button onClick={handleEditClick} style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-pencil-square nav-link-item"></i>
                  </button>
                  <button style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-trash3 nav-link-item"></i>
                  </button>
                </div>
              </Dropdown.Item>

              <Dropdown.Item className="nav-link-item" as={NavLink} to="/main-directory" style={{ color:"black", fontSize: '15px', paddingBottom: "5px", backgroundColor: "transparent" }}>
              Main
              </Dropdown.Item> 
              <Dropdown.Item style={{backgroundColor: "transparent"}}>
                <Button onClick={handleNewDirectoryClick} className='new-btn-dropdown' style={{ fontSize: '13px', border: "dashed 2px rgba(0, 0, 0, 0.429)", backgroundColor: "transparent", color: "black", textAlign: 'left', opacity:"0.8" }}>
                  + New
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
      <EditModal show={showModal} handleClose={handleClose} />
      <EditModalNewDirectory show={showNewDirectoryModal} handleClose={handleCloseNewDirectory} /></div>
  );
}

export default SideBar;