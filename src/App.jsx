import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar';  
import ResponsiveSideBar from './Components/ResponsiveSideBar'; 
import Home from './Pages/Home';  
import { Container, Row, Col } from 'react-bootstrap'; 
import ImportantTasks from './Pages/ImportantTasks';
import CompletedTasks from './Pages/CompletedTasks';
import UncompletedTasks from './Pages/UncompletedTasks';
import ElementsOfAllPage from './Components/ElementsOfAllPage';
import EditModal from './Components/EditModal';
import MainDirectoryPage from './Pages/MainDirectoryPage';
import SecondaryPage from './Pages/SecondaryPage';
import './index.css'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowSidebar = () => setShowResponsiveSidebar(true);
  const handleCloseSidebar = () => setShowResponsiveSidebar(false);

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1022);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1022);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          {isLargeScreen && (
            <Col xs={3} className="sidebar-column">  
              <SideBar />
            </Col>
          )}
          
          <Col xs={isLargeScreen ? 9 : 12} className="main-content">
            {!isLargeScreen && (
              
              <ResponsiveSideBar 
                show={showResponsiveSidebar} 
                handleClose={handleCloseSidebar} 
                handleShow={handleShowSidebar} 
              />
            )}
            
            <ElementsOfAllPage onEditClick={handleShowModal} /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/important-tasks" element={<ImportantTasks />} />
              <Route path="/completed-tasks" element={<CompletedTasks />} />
              <Route path="/uncompleted-tasks" element={<UncompletedTasks />} />
              <Route path="/main-directory" element={<MainDirectoryPage />} />
              <Route path="/secondary-directory" element={<SecondaryPage />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <EditModal show={showModal} handleClose={handleCloseModal} /> 
    </BrowserRouter>
  );
}

export default App;
