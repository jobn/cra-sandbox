import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "./useAuthentication";

export const RequireAuthentication = () => {
  const { authenticated } = useAuthentication();

  if (!authenticated) {
    return <Redirect to="/signin" />;
  }

  return null;
};
