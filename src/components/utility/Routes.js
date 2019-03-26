import React from "react";
import { Route, Switch } from "react-router-dom";

import ArtworksIndex from "../ArtworksIndex";
import ArtworksShow from "../ArtworksShow";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ArtworksIndex} />
      <Route path="/artwork/:id" component={ArtworksShow} />
    </Switch>
  );
};

export default Routes;
