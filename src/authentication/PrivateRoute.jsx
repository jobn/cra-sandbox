import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthentication } from "./useAuthentication";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuthentication();

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
