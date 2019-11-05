import React from "react";
import WeekendRecsBtn from "./WeekendRecsBtn";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";

describe("<WeekendRecsBtn />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WeekendRecsBtn />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<WeekendRecsBtn />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
