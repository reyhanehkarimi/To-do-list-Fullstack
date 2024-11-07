/*eslint-disable*/
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';  
import Home from './Pages/Home';  
import { Container, Row, Col } from 'react-bootstrap'; 
import ImportantTasks from './Pages/ImportantTasks';
import CompletedTasks from './Pages/CompletedTasks';
import UncompletedTasks from './Pages/UncompletedTasks';
import ElementsOfAllPage from './Components/ElementsOfAllPage';
import EditModal from './Components/EditModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col xs={3} className="sidebar-column">  
            <SideBar />
          </Col>
          
          <Col xs={9} className="main-content"> 
            <ElementsOfAllPage onEditClick={handleShowModal} /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/important-tasks" element={<ImportantTasks />} />
              <Route path="/completed-tasks" element={<CompletedTasks />} />
              <Route path="/uncompleted-tasks" element={<UncompletedTasks />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <EditModal show={showModal} handleClose={handleCloseModal} /> 
    </BrowserRouter>
  );
}

export default App;
