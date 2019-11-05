import React from "react";
import LoadingLogin from "./LoadingLogin";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<LoadingLogin />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoadingLogin />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<LoadingLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
