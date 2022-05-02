import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

// component imports
import Home from "./components/Home"
import About from "./components/About"
import Calculator from "./components/Calculator"

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="calc" element={<Calculator />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
