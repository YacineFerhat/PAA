import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Art from "./art";
import Bio from "./bio";
import Conf from "./conf";
import Junior from "./junior";
import Photo from "./photo";
import Redact from "./redac";
import Sport from "./sport";
import Tourisme from "./tourisme";

const Apropos = () => {
  let { name } = useParams();
  let { path } = useRouteMatch();
  //Art & Design

  return (
    <Switch>
      <Route path={`${path}/Sport`}>
        <Sport />
      </Route>
      <Route path={`${path}/Art & Design`}>
        <Art />
      </Route>
    </Switch>
  );
};

export default Apropos;
