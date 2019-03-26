import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.css";
import "bootstrap-css-only";

import Navbar from "./components/utility/Navbar";
import Routes from "./components/utility/Routes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <header>
            <Navbar />
          </header>
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
