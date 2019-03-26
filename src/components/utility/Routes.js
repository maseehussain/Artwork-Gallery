import React from "react";
import { Route, Switch } from "react-router-dom";

import ArtworksHome from "../ArtworksHome";
import ArtworksIndex from "../ArtworksIndex";
import ArtworksShow from "../ArtworksShow";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ArtworksHome} />
      <Route path="/artworkGallery" component={ArtworksIndex} />
      <Route path="/artwork/:id" component={ArtworksShow} />
    </Switch>
  );
};

export default Routes;
