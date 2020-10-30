import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./article";
import Dash from "./dash";
import Event from "./event";
import Info from "./info";
import Team from "./team";
import Utilisateur from "./utilisateur";
import Collab from "./collab";
import Comite from "./comite";
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const AdminContainer = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Dash />
        </Route>
        <Route path={`${path}/Informations`}>
          <Info />
        </Route>
        <Route path={`${path}/Teams`}>
          <Team />
        </Route>
        <Route path={`${path}/Articles`}>
          <Article />
        </Route>
        <Route path={`${path}/Evénements`}>
          <Event />
        </Route>
        <Route path={`${path}/Utilisateurs`}>
          <Utilisateur />
        </Route>
        <Route path={`${path}/Collaborateurs`}>
          <Collab />
        </Route>
        <Route path={`${path}/Inscriptions`}>
          <Comite />
        </Route>
      </Switch>
    </div>
  );
};

export default AdminContainer;
