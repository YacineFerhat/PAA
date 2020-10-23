import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Event from "./event";
import NewEvent from "./newEvent";
import EditEvent from "./editEvent";

const Main = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Event />
      </Route>
      <Route path={`${path}/NouvelEvent`}>
        <NewEvent />
      </Route>
      <Route path={`${path}/EditionEvent`}>
        <EditEvent />
      </Route>
    </Switch>
  );
};

export default Main;
