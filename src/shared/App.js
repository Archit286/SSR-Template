import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import "./App.css";

const App = () => (
  <Switch>
    <Route path="/admin" component={Admin} />
    <Route path="/" component={Home} />
  </Switch>
);

export default App;
