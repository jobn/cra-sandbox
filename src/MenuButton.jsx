import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MenuButton = ({ path, label, icon }) => (
  <Link
    to={path}
    className="w-20 h-20 flex flex-col items-center justify-center"
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <div className="text-sm">{label}</div>
  </Link>
);

export default MenuButton;
