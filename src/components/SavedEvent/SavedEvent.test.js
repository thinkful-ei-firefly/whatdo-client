import React from "react";
import SavedEvent from "./SavedEvent";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<SavedEvent />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SavedEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<SavedEvent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
