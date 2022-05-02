import React from 'react';
import { Link } from "react-router-dom"

const Calculator = () => {
    return (
        <div className="App">
        <div className="nav">
          <p id="logo">React Circle Cypress</p>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/calc">Calculator</Link>
          </nav>
        </div>
        <div className="header">
          Calculator Page
        </div>
      </div>
    );
}

export default Calculator;
