import React, { useState } from 'react';
import { Button, Container, Dropdown, Form } from 'react-bootstrap';
import FormModal from './FormModal';
import '../styles/elements-of-all-page.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStyle } from '../redux/styleCardsSlice';
import { toggleDarkMode } from '../redux/darkModeSlice';
import{addDirectory} from '../redux/directorySlice'


function ElementsOfAllPage() {
  const [date, setDate] = useState(new Date());
  const [showFormModal, setShowFormModal] = useState(false);
  

  const dispatch = useDispatch();
  const currentStyle = useSelector((state) => state.style.styleCard);
  const darkMode = useSelector((state) => state.style.darkMode);
const directories = useSelector((state) => state.directories.directories);


  const handleSetDate = () => {
    setDate(new Date(2024, 10, 6));
  };

  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleShowModal = () => setShowFormModal(true);
  const handleCloseModal = () => setShowFormModal(false);

  const handleToggleStyle = (selectedStyle) => {
    dispatch(toggleStyle(selectedStyle));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());  
  };

  const cardStyle = currentStyle === 'list' ? 'list-style-class' : 'grid-style-class';

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} > 
      <Container style={{ display: "flex", justifyContent: "space-between", marginLeft: "1rem" }} className="mt-2 parent-header">
      <Form style={{ display: "flex" }}>
  <Form.Group
    className={`search-input-header ${darkMode ? 'dark-mode' : 'light-mode'}`}
    style={{ position: "relative", display: "flex" }}
  >
    <Form.Control
      className={darkMode ? 'dark-mode-input' : 'light-mode-input'}
      style={{
        paddingRight: "2.5rem",
        fontSize: "15px",
        display: "flex",
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
        display: "flex",
      }}
    >
      <i
        className={`search-icon bi bi-search`}
        style={{ opacity: "0.5", fontSize: "1rem" }}
      ></i>
    </Button>
  </Form.Group>
</Form>
        <div style={{ display: "flex" }}>{formattedDate}</div>

        <Button
          className='add-new-task-header'
          style={{
            backgroundColor: "rgb(114, 69, 187)",
            width: "160px",
            height: "37.6px",
            border: "none",
            marginRight: "2rem"
          }}
          onClick={() => setShowFormModal(true)}
        >
          Add new task
        </Button>
        <Dropdown className={`Dropdown.Toggle-header ${darkMode ? 'dark-mode' : 'light-mode'}`} style={{ position: "absolute", top: "2.8rem", right: "17.8rem", width: "auto", height: "auto" }}>
  <Dropdown.Toggle
    className={darkMode ? 'dark-mode' : 'light-mode'}
    style={{
      backgroundColor: darkMode ? "green" : "rgba(241, 249, 250, 0.738)",
      color: darkMode ? "white" : "black",
      border: "none",
      paddingRight: "60px",
      paddingLeft: "35px",
      marginTop: "2.5rem",
      textAlign: "center"
    }}
  >
    Sort by
  </Dropdown.Toggle>

  <Dropdown.Menu
className={`Dropdown.Toggle-header ${darkMode ? 'dark-mode' : 'light-mode'}`}    style={{
      border: "none",
      backgroundColor: darkMode ? "rgba(33, 37, 41, 0.8)" : "rgba(241, 249, 250, 0.738)",
    }}
  >
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Sort by</Dropdown.Item>
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-1">Order added</Dropdown.Item>
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-2">Earlier first</Dropdown.Item>
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Later first</Dropdown.Item>
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Completed first</Dropdown.Item>
    <Dropdown.Item className='dropdown-sort' style={{ fontSize: '13px', paddingRight: "0", width: "100%" }} href="#/action-3">Uncompleted first</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </Container>

      <Container className={`below-header ${cardStyle}`} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", marginTop: "2rem", marginLeft: "1rem" }}>
        <h4 className='count-task' style={{ marginLeft: "0.8rem" }}>All tasks</h4>

        <div style={{ display: "flex", marginLeft: "0.8rem", marginTop: "1rem", marginBottom: "1rem" }}>
          <button style={{ border: "none", backgroundColor: "transparent", }} onClick={() => handleToggleStyle('list')}>
            <i style={{ color: 'rgb(114, 69, 187)' }} className="bi bi-list-ul me-2"></i>
          </button>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => handleToggleStyle("grid")}
          >
            <i style={{ color: "rgb(114, 69, 187)" }} className="bi bi-grid"></i>
          </button>
        </div>
      </Container>

      <FormModal show={showFormModal} handleClose={handleCloseModal} setShowModal={setShowFormModal} directories={directories}/>
    </div>
  );
}

export default ElementsOfAllPage;
