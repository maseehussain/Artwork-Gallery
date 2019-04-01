import React from "react";
import Axios from "axios";

import "./ArtworksShow.css";

class ArtworksShow extends React.Component {
  state = {
    artwork: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`https://api.jsonbin.io/b/5ca21ae724f5074645e92ada`)
      .then(res => this.setState({ artwork: res.data[id] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container show-page">
        <div className="row">
          <div className="col-6">
            <h1>{this.state.artwork.nameOfWork}</h1>
            <img src={this.state.artwork.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtworksShow;
