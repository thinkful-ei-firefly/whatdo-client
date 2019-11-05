import React from "react";
import Loading from "./Loading";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<Loading />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
