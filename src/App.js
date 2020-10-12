import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Apropos from "routes/a-propos";
import Comites from "routes/comites";
import Teams from "routes/teams";
import Blog from "routes/blog";
import Colab from "routes/colab";
import BlogArticle from "routes/blog-article";
import Nav from "components/new-nav";
import Event from "routes/evenement";
import Loader from "components/loader";
import MobilNav from "components/mobile-nav";
import GlobalFonts from "fonts/font";
import Container from "components/container";
import Home from "routes/home";
import Footer from "components/footer";
import Admin from "routes/admin";

const App = withRouter(({ location }) => {
  const mediaMatch = window.matchMedia("(min-width: 1114px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);
  //      <Loader />

  let header = matches ? <Nav /> : <MobilNav />;
  return (
    <div className="App" style={{ backgroundColor: "#e5e5e5" }}>
      <GlobalFonts />
      {location.pathname.includes("administration") ||
      location.pathname.includes("Administration")
        ? null
        : header}
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
            <Route path="/Articles/:title">
              <BlogArticle />
            </Route>

            <Route path="/Collaborateurs">
              <Colab />
            </Route>
            <Route path="/Evenements">
              <Event />
            </Route>
            <Route path="/administration">
              <Admin />
            </Route>
          </Switch>
        </div>
      </Container>
      {location.pathname.includes("administration") ||
      location.pathname.includes("Administration") ? null : (
        <Footer />
      )}
    </div>
  );
});

export default App;
