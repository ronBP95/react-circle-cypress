import { Link } from "react-router-dom"
import "./styles/About.css"

function About() {
    return (
      <div className="body">
      <div className="nav">
        <p id="logo">React Circle Cypress</p>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/calc">Calculator</Link>
        </nav>
      </div>
      <div className="header">
        <p>About Page</p>
          <div className="words">
            <p>Success is not final</p>
            <p>Failure is not fatal</p>
            <p>It is the courage to continue that counts</p>
          </div>
      </div>
    </div>
    );
  }

export default About