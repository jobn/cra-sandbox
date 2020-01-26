import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const MenuButton = ({ path, label, icon }) => (
  <NavLink
    to={path}
    className="w-20 h-20 flex flex-col items-center justify-center"
    activeClassName="bg-purple-600"
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <div className="text-sm">{label}</div>
  </NavLink>
);

export default MenuButton;
