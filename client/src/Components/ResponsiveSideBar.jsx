import React, { useState } from 'react';
import { Offcanvas, Button, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import EditModal from './EditModal';
import EditModalNewDirectory from './ModalAddNewDirectory';
import '../styles/sidebar.css';
import '../styles/responsive-page.css';

function ResponsiveSideBar({ show, handleClose, handleShow, directories }) {
  const [showModal, setShowModal] = useState(false);
  const [showNewDirectoryModal, setShowNewDirectoryModal] = useState(false);

  const handleEditClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleNewDirectoryClick = () => setShowNewDirectoryModal(true);
  const handleCloseNewDirectory = () => setShowNewDirectoryModal(false);

  return (
    <>
      <Button
        style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }}
        className='btn-sidebar-res'
        onClick={handleShow}
      >
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '300px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>To-Do List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: 'rgba(241, 249, 250, 0.738)' }}>
          <Nav className="flex-column p-3">
            <Button className='btn-add-task-sidebar' style={{ backgroundColor: 'rgb(114, 69, 187)', border: 'none' }}>
              Add new task
            </Button>

            <Nav.Item className="pb-3 pt-3">
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: 'rgb(179, 3, 3)',
                        textDecoration: 'none',
                        backgroundColor: 'rgba(253, 229, 229, 0.278)',
                        width: '100%',
                        height: '40px',
                        display: 'block',
                        paddingTop: '8.5px',
                        margin: '0',
                      }
                    : { textDecoration: 'none', color: 'black' }
                }
                to="/"
                className="nav-link-item"
              >
                All tasks
              </NavLink>
            </Nav.Item>


            <Nav.Item className="pb-1">
              <Dropdown>
                <Dropdown.Toggle
                  className="nav-link-item"
                  style={{ backgroundColor: 'transparent', color: 'black', border: 'none', padding: '0' }}
                >
                  Directories
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ border: 'none', backgroundColor: 'transparent' }}>
                  {directories.map((directory, index) => (
                    <Dropdown.Item
                      key={index}
                      className='nav-link-item'
                      as={NavLink}
                      to={`/directory/${directory.toLowerCase().replace(" ", "-")}`}
                      style={{
                        color: 'black',
                        fontSize: '15px',
                        paddingBottom: '5px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {directory}
                      <div style={{ display: 'flex', marginLeft: '5rem' }}>
                        <button
                          onClick={handleEditClick}
                          style={{ border: 'none', backgroundColor: 'transparent' }}
                        >
                          <i className="bi bi-pencil-square nav-link-item"></i>
                        </button>
                        <button
                          style={{ border: 'none', backgroundColor: 'transparent' }}
                        >
                          <i className="bi bi-trash3 nav-link-item"></i>
                        </button>
                      </div>
                    </Dropdown.Item>
                  ))}

                  <Dropdown.Item style={{ backgroundColor: 'transparent' }}>
                    <Button
                      onClick={handleNewDirectoryClick}
                      className='new-btn-dropdown'
                      style={{
                        fontSize: '13px',
                        border: 'dashed 2px rgba(0, 0, 0, 0.429)',
                        backgroundColor: 'transparent',
                        color: 'black',
                        textAlign: 'left',
                        opacity: '0.8',
                      }}
                    >
                      + New
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
          <EditModal show={showModal} handleClose={handleCloseModal} />
          <EditModalNewDirectory show={showNewDirectoryModal} handleClose={handleCloseNewDirectory} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveSideBar;
