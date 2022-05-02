import React from 'react';
import { Link } from "react-router-dom"
import "./styles/Calculator.css"

// outside components
import Wrapper from './Calculator/Wrapper';
import Screen from './Calculator/Screen';
import ButtonBox from './Calculator/ButtonBox';
import Button from './Calculator/Button';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

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
          <Wrapper>
      <Screen value={0} />
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
          </div>
        </div>
    );
}

export default Calculator;
