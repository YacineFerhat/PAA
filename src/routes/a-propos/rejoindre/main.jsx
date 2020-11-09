import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Art from "./recrutement/art";
import Bio from "./recrutement/bio";
import Conf from "./recrutement/conf";
import Junior from "./recrutement/junior";
import Photo from "./recrutement/photo";
import Redact from "./recrutement/redac";
import Sport from "./recrutement/sport";
import Tourisme from "./recrutement/tourisme";
import Rejoindre from "./rejoindre";
import Social from "./recrutement/social";
const Apropos = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Rejoindre />
      </Route>
      <Route path={`${path}/Sport`}>
        <Sport />
      </Route>
      <Route path={`${path}/Junior`}>
        <Junior />
      </Route>{" "}
      <Route path={`${path}/Art & Design`}>
        <Art />
      </Route>{" "}
      <Route path={`${path}/Conférence`}>
        <Conf />
      </Route>{" "}
      <Route path={`${path}/Biodiversité`}>
        <Bio />
      </Route>{" "}
      <Route path={`${path}/Photographie et montage vidéo`}>
        <Photo />
      </Route>{" "}
      <Route path={`${path}/Eco-tourisme`}>
        <Tourisme />
      </Route>
      <Route path={`${path}/Rédaction`}>
        <Redact />
      </Route>
      <Route path={`${path}/Réseaux sociaux`}>
        <Social />
      </Route>
    </Switch>
  );
};

export default Apropos;
