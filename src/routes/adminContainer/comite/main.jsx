import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Comite from "./comite";
import Inscription from "./inscription";

const Main = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Comite />
      </Route>
      <Route path={`${path}/:name`}>
        <Inscription />
      </Route>
    </Switch>
  );
};

export default Main;
