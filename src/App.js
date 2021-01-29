import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Nav from "components/new-nav";
import MobilNav from "components/mobile-nav";
import GlobalFonts from "fonts/font";
import Container from "components/container";
import Footer from "components/footer";
import ScrollToTop from "components/scroll-to-top";
import { AuthContext } from "context/authContext";
import { useAuth } from "hooks/useAuth";
const BlogArticle = React.lazy(() => import("routes/blog-article"));
const Blog = React.lazy(() => import("routes/blog"));
const Auth = React.lazy(() => import("routes/auth"));
const Event = React.lazy(() => import("routes/evenement"));
const Home = React.lazy(() => import("routes/home"));
const Admin = React.lazy(() => import("routes/admin"));
const Apropos = React.lazy(() => import("routes/a-propos"));
const Teams = React.lazy(() => import("routes/teams"));

const App = withRouter(({ location }) => {
  const { token, login, logout, userId } = useAuth();
  const mediaMatch = window.matchMedia("(min-width: 1114px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, [mediaMatch]);
  //      <Loader />
  let routes;
  if (token) {
    routes = (
      <Suspense
        fallback={
          <CircularProgress
            style={{ color: "#1d7b63", position: "relative", left: "50%" }}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Apropos">
            <Apropos />
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
          <Route path="/Login">
            <Auth />
          </Route>
          <Route path="/Evenements">
            <Event />
          </Route>
          <Route path="/administration">
            <Admin />
          </Route>
        </Switch>{" "}
      </Suspense>
    );
  } else {
    routes = (
      <Suspense
        fallback={
          <CircularProgress
            style={{ color: "#1d7b63", position: "relative", left: "50%" }}
          />
        }
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Apropos">
            <Apropos />
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
          <Route path="/Login">
            <Auth />
          </Route>
          <Route path="/Evenements">
            <Event />
          </Route>
        </Switch>
      </Suspense>
    );
  }
  let header = matches ? <Nav /> : <MobilNav />;
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <div className="App">
        <ScrollToTop />
        <GlobalFonts />
        {location.pathname.includes("administration") ||
        location.pathname.includes("Administration")
          ? null
          : header}
        <Container>
          <div className="App">{routes}</div>
        </Container>
        {location.pathname.includes("administration") ||
        location.pathname.includes("Administration") ? null : (
          <Footer />
        )}
      </div>{" "}
    </AuthContext.Provider>
  );
});

export default App;
