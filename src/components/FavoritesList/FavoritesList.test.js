import React from "react";
import FavoritesList from "./FavoritesList";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import SearchContext from "../../contexts/SearchContext";

describe.skip("<FavoritesList />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    // const getSavedEvents = getSavedEvents();
    ReactDOM.render(
      <SearchContext.Provider>
        <FavoritesList />
      </SearchContext.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders as expected", () => {
    const tree = renderer.create(<FavoritesList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
