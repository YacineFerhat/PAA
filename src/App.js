import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header";
import Apropos from "./routes/a-propos";
import Comites from "./routes/comites";
function App() {
  return (
    <>
      <Header />
      <div className="App" style={{ marginTop: "120px" }}>
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
        </Switch>
      </div>
    </>
  );
}

export default App;
