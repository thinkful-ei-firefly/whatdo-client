import React from "react";
import SearchBar from "./SearchBar";
import renderer from "react-test-renderer";
import SearchContext from "../../contexts/SearchContext";
import ReactDOM from "react-dom";

describe("<SearchBar />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const value = { date: "2019-11-04T15:56:24.238Z" };
    const tree = renderer
      .create(
        <SearchContext.Provider value={value}>
          <SearchBar />
        </SearchContext.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
