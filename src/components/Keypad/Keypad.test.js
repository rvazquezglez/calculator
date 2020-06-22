import React from "react";
import Keypad from "./Keypad";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({adapter: new Adapter()});

describe("<Keypad />", () => {
    it("should show number when digits are pressed", () => {
        const keypadWrapper = shallow(<Keypad/>);

        expect(keypadWrapper.state().displayValue).toBe("0");

        keypadWrapper.instance().numberPressed(1);
        expect(keypadWrapper.state().displayValue).toBe("1");

        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("12");
    });

    it("adds a decimal point when '.' pressed", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().decimalPressed();
        expect(keypadWrapper.state().displayValue).toBe("0.");
    });

    it("should allow just one decimal point", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(1);
        keypadWrapper.instance().decimalPressed();
        expect(keypadWrapper.state().displayValue).toBe("1.");

        keypadWrapper.instance().decimalPressed();
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("1.2");

        keypadWrapper.instance().decimalPressed();
        expect(keypadWrapper.state().displayValue).toBe("1.2");
    });

    it("clears display when 'C' is pressed", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(1);
        keypadWrapper.instance().numberPressed(2);
        keypadWrapper.instance().numberPressed(3);
        keypadWrapper.instance().clearPressed();
        expect(keypadWrapper.state().displayValue).toBe("0");
    });

    it("sum numbers", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(1);
        keypadWrapper.instance().plusPressed();
        expect(keypadWrapper.state().displayValue).toBe("1");
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
        keypadWrapper.instance().plusPressed();

        expect(keypadWrapper.state().displayValue).toBe("3");
    });

    it("multiplies numbers", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(3);
        keypadWrapper.instance().multiplyPressed();
        expect(keypadWrapper.state().displayValue).toBe("3");
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
        keypadWrapper.instance().multiplyPressed();

        expect(keypadWrapper.state().displayValue).toBe("6");
    });

    it("subtract numbers", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(3);
        expect(keypadWrapper.state().displayValue).toBe("3");
        keypadWrapper.instance().minusPressed();
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
        keypadWrapper.instance().minusPressed();

        expect(keypadWrapper.state().displayValue).toBe("1");
    });

    it("divides numbers", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(8);
        expect(keypadWrapper.state().displayValue).toBe("8");
        keypadWrapper.instance().dividePressed();
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
        keypadWrapper.instance().dividePressed();

        expect(keypadWrapper.state().displayValue).toBe("4");
    });

    it("displays result when equals is pressed", () => {
        const keypadWrapper = shallow(<Keypad/>);

        keypadWrapper.instance().numberPressed(8);
        expect(keypadWrapper.state().displayValue).toBe("8");
        keypadWrapper.instance().dividePressed();
        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
        keypadWrapper.instance().equalsPressed();

        expect(keypadWrapper.state().displayValue).toBe("4");

        keypadWrapper.instance().numberPressed(2);
        expect(keypadWrapper.state().displayValue).toBe("2");
    });
});