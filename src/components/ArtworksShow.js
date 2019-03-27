import React from "react";
import Axios from "axios";

class ArtworksShow extends React.Component {
  state = {
    artwork: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    Axios.get(`https://api.jsonbin.io/b/5c9b88891c56bb1ec38efc1d/3`)
      .then(res => this.setState({ artwork: res.data[id] }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="index-page">
        <div className="row">
          <div className="col-6">
            <h1>Show Page</h1>
            <img src={this.state.artwork.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtworksShow;
