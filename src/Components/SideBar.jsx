import { Button, Dropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './EditModal'
import '../styles/sidebar.css';
import EditModal from './EditModal';
import EditModalNewDirectory from './ModalAddNewDirectory';

function SideBar() {
  const [showModal, setShowModal] = useState(false);
  const [showNewDirectoryModal, setShowNewDirectoryModal] = useState(false);

  const handleEditClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleNewDirectoryClick = () => setShowNewDirectoryModal(true);
  const handleCloseNewDirectory = () => setShowNewDirectoryModal(false);
  const handleShowModal = () => setShowModal(true);

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    console.log("Dark mode:", isDarkMode); 
  }, [isDarkMode]);

  const linkStyle = (isActive) => ({
    color: isActive
      ? (isDarkMode ? "white" : "red") // For active links, white in dark mode, red in light mode
      : (isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(33, 37, 41, 0.8)"), // Inactive links color
    textDecoration: "none",
    backgroundColor: isActive
      ? (isDarkMode ? "#20174dac" : "rgba(172, 146, 146, 0.1)") // Background color when active in dark mode
      : "transparent", // No background for inactive links
    width: "100%",
    height: "40px",
    display: "block",
    paddingTop: "8.5px",
    margin: "0",
    paddingLeft: "0.5rem",
  });

  return (
    <div className={`sidebar ${isDarkMode ? 'dark-mode' : ''}`}>
      <h3 style={{ fontSize: "23px", fontWeight: "500", textAlign: "center", marginBottom: "1rem" }}>
        To-Do List
      </h3>
      <Nav className="flex-column p-3">
        <Button onClick={handleShowModal} className='btn-add-task-sidebar' style={{ backgroundColor: "rgb(114, 69, 187)", border: "none" }}>Add new task</Button>

        <Nav.Item className="pb-3 pt-3">
          <NavLink
            style={({ isActive }) => linkStyle(isActive)}
            to="/"
            className="nav-link-item"
          >
            All tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) => linkStyle(isActive)}
            to="/important-tasks"
            className="nav-link-item"
          >
            Important tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) => linkStyle(isActive)}
            to="/completed-tasks"
            className="nav-link-item"
          >
            Completed tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink
            style={({ isActive }) => linkStyle(isActive)}
            to="/uncompleted-tasks"
            className="nav-link-item"
          >
            Uncompleted tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-1">
          <Dropdown>
            <Dropdown.Toggle className="nav-link-item-drop" style={{ backgroundColor: "transparent", color: "black", border: "none", padding: "0" }}>
              Directories
            </Dropdown.Toggle>

            <Dropdown.Menu className="nav-link-item-drop" style={{ border: "none", backgroundColor: "transparent" }}>
              <Dropdown.Item className='nav-link-item nav-link-item-drop' as={NavLink} to="/secondary-directory" style={{ color: "black", fontSize: '15px', paddingBottom: '5px', display: 'flex', justifyContent: 'space-between', backgroundColor: "transparent" }}>
                Secondary
                <div style={{ display: 'flex' }}>
                  <button onClick={handleEditClick} style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-pencil-square nav-link-item nav-link-item-drop"></i>
                  </button>
                  <button style={{ border: "none", backgroundColor: "transparent" }}>
                    <i className="bi bi-trash3 nav-link-item"></i>
                  </button>
                </div>
              </Dropdown.Item>

              <Dropdown.Item className="nav-link-item nav-link-item-drop" as={NavLink} to="/main-directory" style={{ color: "black", fontSize: '15px', paddingBottom: "5px", backgroundColor: "transparent" }}>
                Main
              </Dropdown.Item>
              <Dropdown.Item style={{ backgroundColor: "transparent" }}>
                <Button
                  onClick={handleNewDirectoryClick}
                  className='new-btn-dropdown'
                  style={{
                    fontSize: '13px',
                    border: "dashed 2px rgba(0, 0, 0, 0.429)",
                    backgroundColor: "transparent",
                    color: "black",
                    textAlign: 'left',
                    opacity: "0.8",
                  }}
                >
                  + New
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>

      <EditModal show={showModal} handleClose={handleClose} />
      <EditModalNewDirectory show={showNewDirectoryModal} handleClose={handleCloseNewDirectory} />
    </div>
  );
}

export default SideBar;
