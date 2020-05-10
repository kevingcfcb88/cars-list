import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  onSearchSumbit = async (sVal) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: sVal },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmitFromApp={this.onSearchSumbit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
