import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header";
import Apropos from "./routes/a-propos";
import Comites from "./routes/comites";
import Teams from "./routes/teams";
import Blog from "./routes/blog";
import Contact from "./routes/contact";
import Colab from "./routes/colab";
import BreadCrumb from "components/breadcrumb";
import BlogArticle from "./routes/blog-article";
import NavBar from "components/navbar";
import Event from "routes/evenement";
import Loader from "./components/loader"
function App() {
  return (
    <>
      <Loader />
      <NavBar />
      <div className="App">
        <BreadCrumb />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Apropos">
            <Apropos />
          </Route>
          <Route path="/Comités">
            <Comites />
          </Route>
          <Route path="/Teams">
            <Teams />
          </Route>
          <Route exact path="/Articles">
            <Blog />
          </Route>
          <Route path="/Articles/:id">
            <BlogArticle />
          </Route>
          <Route path="/Contacts">
            <Contact />
          </Route>
          <Route path="/Collaborateurs">
            <Colab />
          </Route>
          <Route path="/Evenements">
            <Event />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
