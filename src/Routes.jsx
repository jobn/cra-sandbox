import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Scroll from "./Scroll";

const Routes = () => (
  <Switch>
    <Route path="/users">
      <Users />
    </Route>

    <Route path="/scroll">
      <Scroll />
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
