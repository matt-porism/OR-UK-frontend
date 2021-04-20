import React from "react";
import TextInput from "../shared/TextInput";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";


function renderTextInput(args) {
    const defaultProps = {
        name: "title",
        label: "title",
        value: "",
        error: "",
        onChange: () => jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return shallow(<TextInput {...props} />);


}

it("renders input and label", () => {
    const input = renderTextInput();
    expect (input.find("label").text()).toEqual("title");
})