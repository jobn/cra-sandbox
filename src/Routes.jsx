import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";

const Routes = () => (
  <Switch>
    <Route path="/users">
      <Users />
    </Route>

    <Route path="/scroll">
      <h1>Scroll</h1>
    </Route>

    <Route path="/" exact>
      <div className="w-full h-full flex items-center justify-center text-4xl">
        Welcome
      </div>
    </Route>

    <Route>
      <div className="w-full h-full flex items-center justify-center text-4xl">
        404
      </div>
    </Route>
  </Switch>
);

export default Routes;
