import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "./main";
import Biodi from "./biodi";
import Conf from "./conf";
import Junior from "./junior";
import Sport from "./sport";
import Tourisme from "./tourisme";

const Comites = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Main />
      </Route>
      <Route exact path={`${path}/Biodiversité`}>
        <Biodi />
      </Route>
      <Route path={`${path}/Conférence`}>
        <Conf />
      </Route>
      <Route path={`${path}/Junior`}>
        <Junior />
      </Route>
      <Route path={`${path}/Sport`}>
        <Sport />
      </Route>
      <Route path={`${path}/Eco-tourisme`}>
        <Tourisme />
      </Route>
    </Switch>
  );
};

export default Comites;
