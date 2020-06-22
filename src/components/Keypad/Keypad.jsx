import React, {Component} from "react";

import "./Keypad.css";

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0"
        };
    }

    numberPressed(value) {
        const number = this.state.number;
        this.setState({
            number: number === "0"
                ? `${value}`
                : `${number}${value}`
        });
    }

    render() {
        return (<div className="calculator keypad">

            <input
                type="text"
                className="calculator-screen"
                value={this.state.number}
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
                    className="digit btn">
                    7
                </button>
                <button
                    type="button"
                    className="digit btn">
                    8
                </button>
                <button
                    type="button"
                    className="digit btn">
                    9
                </button>


                <button
                    type="button"
                    className="digit btn">
                    4
                </button>
                <button
                    type="button"
                    className="digit btn">
                    5
                </button>
                <button
                    type="button"
                    className="digit btn">
                    6
                </button>


                <button
                    type="button"
                    className="digit btn">
                    1
                </button>
                <button
                    type="button"
                    className="digit btn">
                    2
                </button>
                <button
                    type="button"
                    className="digit btn">
                    3
                </button>


                <button
                    type="button"
                    className="digit btn">
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