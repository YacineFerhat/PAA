import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "./main";
import Objectifs from "./objectifs";
import Plogging from "./plogging";
import QuiSommesNous from "./qui-sommes-nous";
import Rejoindre from "./rejoindre";
import Activite from "./activites";
const Apropos = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Main />
      </Route>
      <Route exact path={`${path}/QuiSommeNous`}>
        <QuiSommesNous />
      </Route>
      <Route path={`${path}/Plogging`}>
        <Plogging />
      </Route>
      <Route path={`${path}/Objectifs`}>
        <Objectifs />
      </Route>
      <Route path={`${path}/RejoignezNous`}>
        <Rejoindre />
      </Route>
      <Route path={`${path}/Activités`}>
        <Activite />
      </Route>
    </Switch>
  );
};

export default Apropos;
