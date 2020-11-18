import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Comite from "./comite";
import Inscription from "./inscription";
import EcoTourisme from "./candidatures/eco-tourisme";
import Junior from "./candidatures/junior";
import Sport from "./candidatures/sport";
import Redac from "./candidatures/redac";
import Social from "./candidatures/social";
import Art from "./candidatures/art";
import Bio from "./candidatures/bio";
import Conf from "./candidatures/conf";

const Main = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Comite />
      </Route>
      <Route path={`${path}/Eco-tourisme`}>
        <EcoTourisme />
      </Route>{" "}
      <Route path={`${path}/Junior`}>
        <Junior />
      </Route>{" "}
      <Route path={`${path}/Sport`}>
        <Sport />
      </Route>{" "}
      <Route path={`${path}/Rédaction`}>
        <Redac />
      </Route>{" "}
      <Route path={`${path}/Réseaux sociaux`}>
        <Social />
      </Route>{" "}
      <Route path={`${path}/Art & Design`}>
        <Art />
      </Route>{" "}
      <Route path={`${path}/Biodiversité`}>
        <Bio />
      </Route>{" "}
      <Route path={`${path}/Conférence`}>
        <Conf />
      </Route>{" "}
    </Switch>
  );
};

export default Main;
