import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useAuthentication } from "./authentication";

const HiddenMenuButton = () => {
  const { authenticated } = useAuthentication();

  if (!authenticated) {
    return null;
  }

  return (
    <NavLink
      to={"/secret"}
      className="w-20 h-20 flex flex-col items-center justify-center"
      activeClassName="bg-purple-600"
    >
      <FontAwesomeIcon icon={faUserSecret} size="lg" />
      <div className="text-sm">Secret</div>
    </NavLink>
  );
};

export default HiddenMenuButton;
