import React from "react";

import "./ArtworksHome.css";

class ArtworksHome extends React.Component {
  render() {
    return (
      <div className="home-page hero">
        <h1>Thomas Merton - </h1>
        <p>
          “Art enables us to find ourselves and lose ourselves at the same
          time.”
        </p>
        <img src="http://www.zengarage.com.au/wp-content/uploads/2011/10/banksy-grenade.jpg" />
        <div className="bar" />
      </div>
    );
  }
}

export default ArtworksHome;
