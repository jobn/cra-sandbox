import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Scroll from "./Scroll";
import Home from "./Home";
import { AuthenticationForm } from "./authentication";

const Routes = () => (
  <Switch>
    <Route path="/users">
      <Users />
    </Route>

    <Route path="/scroll">
      <Scroll />
    </Route>

    <Route path="/signin">
      <AuthenticationForm />
    </Route>

    <Route path="/" exact>
      <Home />
    </Route>

    <Route>
      <div className="w-full h-full flex items-center justify-center text-4xl">
        404
      </div>
    </Route>
  </Switch>
);

export default Routes;
