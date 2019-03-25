import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap-css-only";

import ArtworksIndex from "./components/artworksIndex";

function App() {
  return (
    <div className="container">
      <ArtworksIndex />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
