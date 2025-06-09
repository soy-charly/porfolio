import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    // Update the dark mode class on the html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the preference
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <nav className="nav">
      <div className="nav-container container">
        <Link to="/" className="nav-logo">
          Portfolio
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <Link to="/skills" className="nav-link">Frameworks</Link>
          <Link to="/languages" className="nav-link">Lenguajes</Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-secondary"
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}; 
