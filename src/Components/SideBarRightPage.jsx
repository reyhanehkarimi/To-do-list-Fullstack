// SideBarRight.js
import React from 'react';
import "../styles/sidebar-right.css";
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/darkModeSlice';

function SideBarRight() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector(state => state.darkMode.isDarkMode);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div className={`sidebar-right ${isDarkMode ? 'dark-mode' : ''}`} >
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h4 className='text-sidebar' style={{ fontSize: "20px", marginTop: "5px" }}>Hi, User!</h4>
                <img style={{ width: "35px", height: "35px", marginLeft: "10px" }} src="./woman.png" alt="" />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", width: "80%", marginTop:"20px" }}>
                <p style={{ color: isDarkMode ? "#ffffff" : "#333", marginTop:"8px" }}>Dark Mode</p>
                <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={handleToggle}>
                    <div className="toggle-circle" />
                </button>
            </div>

            <div style={{ marginTop: "15px", width: "80%" }}>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p>All tasks</p>
                    <span>2/3</span>
                </div>
                <ProgressBar now={60} style={{ height: "10px" }}  className="custom-progress-bar"/>
            </div>
            <div style={{ marginTop: "auto", width: "100%", display: "flex", flexDirection: "column",paddingRight:"25px", paddingLeft:"25px", paddingBottom:"10px" }}>
                <p className='delete-text' style={{opacity:"0.8"}}>Delete all data</p>
                <button 
                    className={`create-btn ${isDarkMode ? 'dark-mode' : ''}`} 
                    style={{ width: "100%", height: "35px", borderRadius: "5px", backgroundColor: "rgba(249, 191, 191, 0.695)", color: "rgb(179, 3, 3)", border: "none" }}
                >
                    Created by ...
                </button>
            </div>
        </div>
    );
}

export default SideBarRight;
