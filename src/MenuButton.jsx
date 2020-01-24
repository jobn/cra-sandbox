import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuButton = ({ label, icon }) => (
  <button className="w-20 h-20 flex flex-col items-center justify-center">
    <FontAwesomeIcon icon={icon} size="lg" />
    <div className="text-sm">{label}</div>
  </button>
);

export default MenuButton;
