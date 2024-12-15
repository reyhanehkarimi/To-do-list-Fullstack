import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

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
import DirectoryPage from "./Pages/DirectoryPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showResponsiveSidebar, setShowResponsiveSidebar] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1022);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("isUserLoggedIn") === "true"
  );

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowSidebar = () => setShowResponsiveSidebar(true);
  const handleCloseSidebar = () => setShowResponsiveSidebar(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1022);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = () => {
    setIsUserLoggedIn(true);
    localStorage.setItem("isUserLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("isUserLoggedIn");
  };

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
              <Route
                path="/signup"
                element={<Signup onLogin={handleLogin} />}
              />
              <Route
                path="/login"
                element={<Login onLogin={handleLogin} />}
              />

              <Route
                path="/home"
                element={
                  isUserLoggedIn ? (
                    <Home />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/important-tasks"
                element={
                  isUserLoggedIn ? (
                    <ImportantTasks />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/completed-tasks"
                element={
                  isUserLoggedIn ? (
                    <CompletedTasks />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/uncompleted-tasks"
                element={
                  isUserLoggedIn ? (
                    <UncompletedTasks />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/main-directory"
                element={
                  isUserLoggedIn ? (
                    <MainDirectoryPage />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="/directory/:id"
                element={
                  isUserLoggedIn ? (
                    <DirectoryPage />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />

              <Route path="*" element={<Navigate to="/login" />} />
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
