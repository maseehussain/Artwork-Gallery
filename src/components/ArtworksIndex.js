import React from "react";
import Axios from "axios";

import Search from "./utility/Search";

import "./ArtworksIndex.css";

class ArtworksIndex extends React.Component {
  state = {
    artworksData: []
  };

  componentDidMount() {
    Axios.get(`https://api.jsonbin.io/b/5c9b88891c56bb1ec38efc1d/3`)
      .then(res => this.setState({ artworksData: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="index-page">
        <Search />
      </div>
    );
  }
}

export default ArtworksIndex;
