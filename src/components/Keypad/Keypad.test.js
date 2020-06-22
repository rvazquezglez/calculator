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

    it("adds a decimal point", () => {
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
});