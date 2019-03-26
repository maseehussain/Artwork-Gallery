import React from "react";

import "./ArtworksHome.css";

class ArtworksHome extends React.Component {
  render() {
    return (
      <div className="home-page hero">
        <h1>Galeria</h1>
        <p>
          “Art enables us to find ourselves and lose ourselves at the same
          time.” - Thomas Merton
        </p>
        <img src="https://40.media.tumblr.com/f2916759544c106d91c28a9e0fd2cb94/tumblr_n7qhrzxUiv1sfie3io1_1280.jpg" />
        <div className="bar" />
      </div>
    );
  }
}

export default ArtworksHome;
