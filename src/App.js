import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Apropos from "./routes/a-propos";
import Comites from "./routes/comites";
import Teams from "./routes/teams";
import Blog from "./routes/blog";
import Contact from "./routes/contact";
import Colab from "./routes/colab";
import BreadCrumb from "components/breadcrumb";
import BlogArticle from "./routes/blog-article";
import NavBar from "components/navbar";
import Nav from "components/new-nav";
import Event from "routes/evenement";
import GlobalFonts from "./fonts/font";
function App() {
  return (
    <>
      <GlobalFonts />
      <Nav />
      <div className="App">
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
