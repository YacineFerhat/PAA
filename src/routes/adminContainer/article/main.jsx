import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Article from "./article";
import NewArticle from "./newArticle";
const Catalogue = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <Article />
      </Route>

      <Route path={`${path}/NouvelArticle`}>
        <NewArticle />
      </Route>
    </Switch>
  );
};

export default Catalogue;
