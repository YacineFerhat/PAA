import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Apropos from "routes/a-propos";
import Comites from "routes/comites";
import Teams from "routes/teams";
import Blog from "routes/blog";
import Colab from "routes/colab";
import BreadCrumb from "components/breadcrumb";
import BlogArticle from "routes/blog-article";
import Nav from "components/new-nav";
import Event from "routes/evenement";
import Loader from "components/loader";
import MobilNav from "components/mobile-nav";
import GlobalFonts from "fonts/font";
import Container from "components/container";
import Home from "routes/home";
import Footer from "components/footer";
import "./App.css";
function App() {
  const mediaMatch = window.matchMedia("(min-width: 1114px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);

  let header = matches ? <Nav /> : <MobilNav />;
  return (
    <div className="App" style={{ backgroundColor: "#e5e5e5" }}>
      <Loader />
      <GlobalFonts />
      {header}
      <Container>
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

            <Route path="/Collaborateurs">
              <Colab />
            </Route>
            <Route path="/Evenements">
              <Event />
            </Route>
          </Switch>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
