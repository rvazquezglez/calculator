import React, {Component} from "react";

import "./Keypad.css";

class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0",
            number: "0",
            firstOperand: null
        };
    }

    numberPressed(value) {
        const number = this.state.number;
        let newValue = number === "0"
            ? `${value}`
            : `${number}${value}`;
        this.setState({
            number: newValue,
            displayValue: newValue
        });
    }

    decimalPressed() {
        const number = this.state.number;
        if (!number.includes(".")) {
            this.setState({
                number: `${number}.`,
                displayValue: `${number}.`
            });
        }
    }

    clearPressed() {
        this.setState({
            displayValue: "0",
            firstOperand: null
        });
    }

    evaluate() {
        const operations = {
            '/': (a, b) => a / b,

            '*': (a, b) => a * b,

            '+': (a, b) => a + b,

            '-': (a, b) => a - b
        };

        return this.state.operator !== null
            ? operations[this.state.operator](this.state.firstOperand, parseFloat(this.state.displayValue))
            : 0
    }

    operatorPressed(operator) {
        if (this.state.firstOperand === null) {
            this.setState({
                firstOperand: parseFloat(this.state.displayValue),
                operator: operator,
                number: "0"
            });
        } else {
            let result = this.evaluate();
            this.setState({
                firstOperand: result,
                displayValue: result.toString(),
                operator: operator,
                number: "0"
            });

        }
    }

    plusPressed() {
        this.operatorPressed("+");
    }

    multiplyPressed() {
        this.operatorPressed("*");
    }

    minusPressed() {
        this.operatorPressed("-");
    }

    dividePressed() {
        this.operatorPressed("/");
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
                    className="operator btn"
                    onClick={() => this.plusPressed()}>
                    +
                </button>
                <button
                    type="button"
                    className="operator btn"
                    onClick={() => this.minusPressed()}>
                    -
                </button>
                <button
                    type="button"
                    className="operator btn"
                    onClick={() => this.multiplyPressed()}>
                    &times;
                </button>
                <button
                    type="button"
                    className="operator btn"
                    onClick={() => this.dividePressed()}>
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
                    className="decimal btn"
                    onClick={() => this.decimalPressed()}>
                    .
                </button>
                <button
                    type="button"
                    className="clear btn"
                    onClick={() => this.clearPressed()}>
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