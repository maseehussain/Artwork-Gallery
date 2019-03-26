import React from "react";
import Axios from "axios";

class ArtworksShow extends React.Component {
  state = {
    artwork: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params.id;
    Axios.get(`https://api.jsonbin.io/b/5c99f87e1c56bb1ec38d88aa`)
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
