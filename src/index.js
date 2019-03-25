import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import ArtworkIndex from "./components/artworkIndex";

function App() {
  return (
    <div className="App">
      <ArtworkIndex />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
