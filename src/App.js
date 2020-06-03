import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
