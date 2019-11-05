import React from "react";
import PageBar from "./PageBar";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<PageBar />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<PageBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<PageBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
