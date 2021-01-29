import React, { Suspense } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

const Comites = React.lazy(() => import("routes/comites"));
const Colab = React.lazy(() => import("routes/colab"));
const Main = React.lazy(() => import("./main"));
const Objectifs = React.lazy(() => import("./objectifs"));
const Plogging = React.lazy(() => import("./plogging"));
const QuiSommesNous = React.lazy(() => import("./qui-sommes-nous"));
const Rejoindre = React.lazy(() => import("./rejoindre"));
const Activite = React.lazy(() => import("./activites"));
const Contact = React.lazy(() => import("routes/contact"));
const Recrutement = React.lazy(() => import("./rejoindre/recrutement/main"));
const Apropos = () => {
  let { path } = useRouteMatch();
  return (
    <Suspense
      fallback={
        <CircularProgress
          style={{ color: "#1d7b63", position: "relative", left: "50%" }}
        />
      }
    >
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
        <Route path={`${path}/Recrutement`}>
          <Recrutement />
        </Route>
        <Route path={`${path}/Collaborateurs`}>
          <Colab />
        </Route>
        <Route path={`${path}/Comités`}>
          <Comites />
        </Route>
        <Route path={`${path}/Activités`}>
          <Activite />
        </Route>
        <Route path={`${path}/Contact`}>
          <Contact />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Apropos;
