import React from "react";

import "./styles.css";
import "bootstrap-css-only";

import ArtworksIndex from "./components/artworksIndex";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <ArtworksIndex />
      </div>
    );
  }
}

export default App;
