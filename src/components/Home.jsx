import React from "react";
import Main from "./Main";
import Check from "./Check";
import { Route, Switch } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/check" component={Check} />
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default Home;
