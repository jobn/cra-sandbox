import React from "react";
import { Switch, Route } from "react-router-dom";
import Users from "./Users";
import Scroll from "./Scroll";
import Home from "./Home";
import { AuthenticationForm, PrivateRoute } from "./authentication";

const Routes = () => (
  <Switch>
    <PrivateRoute path="/users" component={Users} />
    <Route path="/scroll" component={Scroll} />
    <Route path="/signin" component={AuthenticationForm} />
    <Route path="/" exact component={Home} />

    <Route>
      <div className="w-full h-full flex items-center justify-center text-4xl">
        404
      </div>
    </Route>
  </Switch>
);

export default Routes;
