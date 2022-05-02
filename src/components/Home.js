import React from 'react';
import { Link } from "react-router-dom"

function clickAlert () {
  window.alert("the button was clicked")
}

const Home = () => {
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
        <p>Hello Cypress</p>
        <button className="button" onClick={clickAlert}>Click Me</button>
      </div>
    </div>
  );
}

export default Home;
