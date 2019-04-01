import React from "react";
import Axios from "axios";
import Posed from "react-pose";
import { Link } from "react-router-dom";

import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      artworksData: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Axios.get(`https://api.jsonbin.io/b/5ca21ae724f5074645e92ada`)
      .then(res => this.setState({ artworksData: res.data }))
      .catch(err => console.log(err));
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _artworksData = this.state.artworksData;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _artworksData = _artworksData.filter(function(artworksData) {
        return artworksData.tags.toLowerCase().match(search);
      });
    }

    const BoxShadow = Posed.img({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 1.1,
        boxShadow: "0px 5px 10px rgba(0,0,0,0.6)"
      },
      press: {
        scale: 1.1,
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
      }
    });

    return (
      <div className="row">
        <div className="col-12">
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="Search here"
          />
        </div>
        {_artworksData.map(artwork => {
          return (
            <div key={artwork.id} className="col-md-4">
              <Link to={`/artwork/${artwork.id}`}>
                <BoxShadow
                  src={artwork.image}
                  className="img-index img-responsive"
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Search;
