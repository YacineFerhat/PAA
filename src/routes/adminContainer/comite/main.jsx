import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Comite from "./comite";
import Inscription from "./inscription";
import EcoTourisme from "./candidatures/eco-tourisme";
const Main = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Comite />
      </Route>
      <Route path={`${path}/Eco-tourisme`}>
        <EcoTourisme />
      </Route>
    </Switch>
  );
};

export default Main;
