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
        <h2>Hello Cypress</h2>
        <div className='words'>
          <p>Welcome to the trees</p>
        </div>
        <p onClick={clickAlert} id="button">Learn More<span id="arrow">➜</span></p>
      </div>
    </div>
  );
}

export default Home;
