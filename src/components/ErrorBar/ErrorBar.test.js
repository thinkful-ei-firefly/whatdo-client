import React from "react";
import ErrorBar from "./ErrorBar";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<ErrorBar />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ErrorBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<ErrorBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
