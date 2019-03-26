import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
import "bootstrap-css-only";

import Routes from "./components/utility/Routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header />
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
