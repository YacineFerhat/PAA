import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Main from "./main";
import Objectifs from "./objectifs";
import Plogging from "./plogging";
import QuiSommesNous from "./qui-sommes-nous";
import Rejoindre from "./rejoindre";
import Activite from "./activites";
import Contact from "routes/contact";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "6% 10% 0% 10%",
    backgroundColor: "white",
  },
}));
const Apropos = () => {
  const classes = useStyles();

  let { path } = useRouteMatch();
  return (
    <div className={classes.root}>
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
        <Route path={`${path}/Contact`}>
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Apropos;
