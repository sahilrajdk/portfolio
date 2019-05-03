import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Route, Switch } from "react-router-dom";

const main = () => (
  <div className="main">
    <Switch>
      <Route path="/" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Switch>
  </div>
);

export default main;
