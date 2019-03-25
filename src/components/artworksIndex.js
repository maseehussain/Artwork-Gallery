import React from "react";
import Axios from "axios";

class ArtworksIndex extends React.Component {
  state = {
    artworksData: []
  };

  componentDidMount() {
    Axios.get("https://api.jsonbin.io/b/5c98f4121bdf051e853a4b30/2")
      .then(res => this.setState({ artworksData: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="index-page">
        <div className="row">
          {this.state.artworksData.map(artworkData => {
            return (
              <div key={artworkData.id} className="col-md-4">
                <img
                  src={artworkData.image}
                  className="img-index img-thumbnail img-responsive"
                />
                <h2>{artworkData.nameOfWork}</h2>
                <p>{artworkData.material}</p>
                <h3>{artworkData.yearCreated}</h3>
                <h4>£{artworkData.price}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ArtworksIndex;
