import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../src/pages/Home";
import Buy from "../src/pages/Buy";
import Register from "../src/pages/Register";

export default () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/buy" component={Buy} />
    <Route path="/register" component={Register} exact />
  </Switch>
);
