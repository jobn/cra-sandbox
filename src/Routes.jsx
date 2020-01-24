import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/users">
      <h1>Users</h1>
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
