import React from "react";
import { Context } from "./Container";

export const useAuthentication = () => {
  return React.useContext(Context);
};
