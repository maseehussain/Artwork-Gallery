import React from "react";
import Posed from "react-pose";

import "./ArtworksHome.css";

class ArtworksHome extends React.Component {
  render() {
    const Img = Posed.img({
      dull: {
        filter: "grayscale(100%) brightness(100%)"
      },
      coloured: {
        delay: 500, // Wait for it to load - a better way would be onload -> setState, but just hacking this together
        filter: "grayscale(0%) brightness(100%)"
      }
    });
    return (
      <div className="home-page hero">
        <h1>Thomas Merton - </h1>
        <p>
          “Art enables us to find ourselves and lose ourselves at the same
          time.”
        </p>
        <Img
          initialPose="dull"
          pose="coloured"
          src="https://el-paso-museum-of-art-production.s3.amazonaws.com/collections/images/000/000/002/optimized/Dugan.jpg?1516833183"
        />
        <div className="bar" />
      </div>
    );
  }
}

export default ArtworksHome;
