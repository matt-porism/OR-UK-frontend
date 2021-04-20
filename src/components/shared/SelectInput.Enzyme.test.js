import React from "react";
import SelectInput from "./SelectInput";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";


function renderSelectInput(args) {
    const defaultProps = {
        name: "title",
        label: "title",
        value: "",
        error: "",
        options:[{value:"1", text:"item 1"},{value:"2", text:"item 2"}],
        onChange: () => jest.fn(),
    };
    const props = { ...defaultProps, ...args };
    return shallow(<SelectInput {...props} />);


}

it("renders select and label", () => {
    const select = renderSelectInput();
    expect (select.find("label").text()).toEqual("title");
})