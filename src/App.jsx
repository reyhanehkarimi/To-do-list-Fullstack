/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "./Components/SideBar";
import ResponsiveSideBar from "./Components/ResponsiveSideBar";
import SideBarRight from "./Components/SideBarRightPage";
import Home from "./Pages/Home";
import ImportantTasks from "./Pages/ImportantTasks";
import CompletedTasks from "./Pages/CompletedTasks";
import UncompletedTasks from "./Pages/UncompletedTasks";
import ElementsOfAllPage from "./Components/ElementsOfAllPage";
import EditModal from "./Components/EditModal";
import MainDirectoryPage from "./Pages/MainDirectoryPage";
import SecondaryPage from "./Pages/SecondaryPage";
import "./index.css";

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

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Container fluid style={{ padding: 0, margin: "0 auto", width: "100%" }}>
        <Row style={{ margin: 0, width: "100%" }}>
          {isLargeScreen && (
            <Col xs={2} className="sidebar-column" style={{ padding: 0 }}>
              <SideBar />
            </Col>
          )}

          <Col
            xs={isLargeScreen ? 8 : 12}
            className="main-content"
            style={{ padding: 0 }}
          >
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

          {isLargeScreen && (
            <Col xs={3} className="sidebar-right-column" style={{ padding: 0 }}>
              <SideBarRight />
            </Col>
          )}
        </Row>
      </Container>
      <EditModal show={showModal} handleClose={handleCloseModal} />
    </BrowserRouter>
  );
}

export default App;
