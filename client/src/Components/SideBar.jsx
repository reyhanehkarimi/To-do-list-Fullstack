import { Button, Dropdown, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './EditModal';
import '../styles/sidebar.css';
import EditModal from './EditModal';
import EditModalNewDirectory from './ModalAddNewDirectory';
import FormModal from './FormModal';
import '../styles/responsive-page.css'


function SideBar() {
  const [directories, setDirectories] = useState(["Main"]);
  const [showFormModal, setShowFormModal] = useState(false);  
  const [showModal, setShowModal] = useState(false);
  const [showNewDirectoryModal, setShowNewDirectoryModal] = useState(false);
  const [currentDirectory, setCurrentDirectory] = useState("");

  const handleEditClick = (directory) => {
    setCurrentDirectory(directory); 
    setShowModal(true);
  };

  const handleUpdateDirectory = (updatedName) => {
    setDirectories((prevDirectories) =>
      prevDirectories.map((dir) => (dir === currentDirectory ? updatedName : dir))
    );
    setShowModal(false);
  };

  const handleCloseModal = () => setShowFormModal(false); 
  const handleClose = () => setShowModal(false);  
  const handleCloseNewDirectory = () => setShowNewDirectoryModal(false);  
  const handleNewDirectoryClick = () => {
    setShowModal(false);
    setShowNewDirectoryModal(true);
  };

  const handleCreateDirectory = (newDirectory) => {
    setDirectories((prevDirectories) => [...prevDirectories, newDirectory]);
    setShowNewDirectoryModal(false); 
  };

  const handleDeleteClick = (directory) => {
    setDirectories((prevDirectories) => prevDirectories.filter((dir) => dir !== directory));
  };

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const linkStyle = (isActive) => ({
    color: isActive ? (isDarkMode ? "white" : "red") : (isDarkMode ? "rgba(255, 255, 255, 0.8)" : "rgba(33, 37, 41, 0.8)"),
    textDecoration: "none",
    backgroundColor: isActive ? (isDarkMode ? "#20174dac" : "rgba(172, 146, 146, 0.1)") : "transparent",
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
        <Button onClick={() => setShowFormModal(true)} className='btn-add-task-sidebar' style={{ backgroundColor: "rgb(114, 69, 187)", border: "none" }}>
          Add new task
        </Button>

        <Nav.Item className="pb-3 pt-3">
          <NavLink style={({ isActive }) => linkStyle(isActive)} to="/" className="nav-link-item">
            All tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink style={({ isActive }) => linkStyle(isActive)} to="/important-tasks" className="nav-link-item">
            Important tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink style={({ isActive }) => linkStyle(isActive)} to="/completed-tasks" className="nav-link-item">
            Completed tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-3">
          <NavLink style={({ isActive }) => linkStyle(isActive)} to="/uncompleted-tasks" className="nav-link-item">
            Uncompleted tasks
          </NavLink>
        </Nav.Item>

        <Nav.Item className="pb-1">
          <Dropdown>
            <Dropdown.Toggle className="nav-link-item-drop" style={{ backgroundColor: "transparent", color: "black", border: "none", padding: "0" }}>
              Directories
            </Dropdown.Toggle>

            <Dropdown.Menu className="nav-link-item-drop" style={{ border: "none", backgroundColor: "transparent" }}>
              {directories.map((directory, index) => (
                <Dropdown.Item
                  key={index}
                  className="nav-link-item nav-link-item-drop"
                  as="div" 
                  style={{
                    color: "black",
                    fontSize: "15px",
                    paddingBottom: "5px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <NavLink
                    to={`/${directory.toLowerCase().replace(" ", "-")}`}
                    style={{ textDecoration: "none", color: "inherit", flex: 1 }}
                  >
                    {directory}
                  </NavLink>
                  <div style={{ display: "flex", justifyContent: "right", gap: "5px" }}>
                    <button
                      onClick={() => handleEditClick(directory)}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <i className="bi bi-pencil-square nav-link-item nav-link-item-drop edit-icon"></i>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(directory)}
                      style={{ border: "none", backgroundColor: "transparent" }}
                    >
                      <i className="bi bi-trash3 nav-link-item trash-drop-icon"></i>
                    </button>
                  </div>
                </Dropdown.Item>
              ))}
              <Dropdown.Item style={{ backgroundColor: "transparent" }}>
                <Button
                  onClick={handleNewDirectoryClick}
                  className="new-btn-dropdown"
                  style={{
                    fontSize: "13px",
                    border: "dashed 2px rgba(0, 0, 0, 0.429)",
                    backgroundColor: "transparent",
                    color: "black",
                    textAlign: "left",
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

      <EditModal show={showModal && !showNewDirectoryModal} handleClose={handleClose} />
      <EditModalNewDirectory
        show={showNewDirectoryModal && !showModal}
        handleClose={handleCloseNewDirectory}
        onCreateDirectory={handleCreateDirectory}
      />
      <FormModal show={showFormModal} handleClose={handleCloseModal} setShowModal={setShowFormModal} directories={directories}/>
    </div>
  );
}

export default SideBar;
