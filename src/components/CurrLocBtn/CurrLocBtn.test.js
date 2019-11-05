import React from "react";
import CurrLocBtn from "./CurrLocBtn";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<CurrLocBtn />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CurrLocBtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<CurrLocBtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
