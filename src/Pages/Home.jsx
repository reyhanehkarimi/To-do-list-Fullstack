import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import '../styles/home.css';
import '../styles/sidebar-right.css'

function App() {
  const isDarkMode = useSelector(state => state.darkMode.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return <Home />;
}

export default App;
