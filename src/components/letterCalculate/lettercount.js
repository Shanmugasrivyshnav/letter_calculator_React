import { Component } from "react";

import "./lettercount.css";

// Write your code here.
class LettersCalculator extends Component {
  state = { inputText: "" };

  LetterCalculator = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    const { inputText } = this.state;
    const lettercount = inputText.length;

    return (
      <div className="letter-container">
        <div className="calculator-container">
          <h1 className="main-heading">
            Calculate the <br /> Letters you <br /> enter
          </h1>
          <p className="description">Enter the pharse</p>
          <input
            type="text"
            className="search-input"
            onChange={this.LetterCalculator}
            value={inputText}
          />
          <p className="search-result">No of letters:{lettercount}</p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters-calculator"
            className="img-calculator"
          />
        </div>
      </div>
    );
  }
}
export default LettersCalculator;
