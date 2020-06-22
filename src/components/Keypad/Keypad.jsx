import React, {Component} from "react";

import "./Keypad.css";

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0",
            number: 0
        };
    }

    numberPressed(value) {
        const displayValue = this.state.displayValue;
        this.setState({
            displayValue: displayValue === "0"
                ? `${value}`
                : `${displayValue}${value}`
        });
    }

    render() {
        return (<div className="calculator keypad">

            <input
                type="text"
                className="calculator-screen"
                value={this.state.displayValue}
                disabled
            />

            <div className="calculator-keys">

                <button
                    type="button"
                    className="operator btn">
                    +
                </button>
                <button
                    type="button"
                    className="operator btn">
                    -
                </button>
                <button
                    type="button"
                    className="operator btn">
                    &times;
                </button>
                <button
                    type="button"
                    className="operator btn">
                    &divide;
                </button>

                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(7)}>
                    7
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(8)}>
                    8
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(9)}>
                    9
                </button>


                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(4)}>
                    4
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(5)}>
                    5
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(6)}>
                    6
                </button>


                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(1)}>
                    1
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(2)}>
                    2
                </button>
                <button
                    type="button"
                    className="digit btn"
                    onClick={() => this.numberPressed(3)}>
                    3
                </button>


                <button
                    type="button"
                    className="digit btn zero"
                    onClick={() => this.numberPressed(0)}>
                    0
                </button>
                <button
                    type="button"
                    className="decimal btn">
                    .
                </button>
                <button
                    type="button"
                    className="clear btn">
                    C
                </button>

                <button
                    type="button"
                    className="equal-sign btn">
                    =
                </button>
            </div>
        </div>)
    }
}

export default Keypad;