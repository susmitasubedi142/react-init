import React from 'react';
import { useTheme } from './Theme'; // Update path to ThemeContext
import '../header.css';
import { Link } from 'react-router-dom';

export function Header() {
  // const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="nav__logo flex items-center space-x-2">
          <img src="images/logo.png" alt="NagarikApp" className="logo" />
          <span className="text-lg font-bold">NagarikApp</span>
        </div>

        <ul className="nav__links flex space-x-4">
          <li className="link"><a href="#">Home</a></li>
          <li className="link"><a href="Calculator">Calculator</a></li>
          <li className="link"><a href="SumInput">SumInput</a></li>
          <li className="link"><a href="Practices">Practices</a></li>
          <li className="link"><a href="UseState">UseState</a></li>
          <li className="link"><a href="home">home</a></li>
          <li className="dropdown">
            <div className="auth-box">
              <Link to="/login">
                <button className="dropbtn">Login</button>
              </Link>
              <button className="dropbtn">Register</button>
            </div>
            <div className="dropdown-content">
              {/* Dropdown content can be added here */}
            </div>
          </li>
        </ul>

        {/* Add Theme Toggle Button */}
        {/* <button
          onClick={toggleTheme}
          className="px-4 py-2 ml-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button> */}
      </nav>
    </header>
  );
}
