import "./App.css"

// Alert function for button click

function clickAlert () {
  window.alert("the button was clicked")
}

function App() {
  return (
    <div className="App">
      <div className="header">
        <p>Hello Cypress</p>
        <button className="button" onClick={clickAlert}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
