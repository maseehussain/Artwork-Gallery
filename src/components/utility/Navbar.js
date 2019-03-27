import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="navbar-brand logo" to="/">
          Galeria
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <Link className="nav-item nav-link" to="/">
              Home
            </Link> */}
            <Link className="nav-item nav-link" to="/artworkGallery">
              Artwork Gallery
            </Link>
            <Link className="nav-item nav-link" to="#">
              Find Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
