import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTruckMonster,
  faBicycle,
  faLifeRing
} from "@fortawesome/free-solid-svg-icons";

import MenuButton from "./MenuButton";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="h-20 flex justify-between items-center px-8 bg-gray-400">
        <h1 className="text-2xl text-pink-600">CRA Sandbox</h1>
        <div>
          <FontAwesomeIcon icon={faCoffee} size="lg" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex md:flex-col bg-gray-600">
          <MenuButton icon={faTruckMonster} label="Truck" />
          <MenuButton icon={faBicycle} label="Bicycle" />
          <MenuButton icon={faLifeRing} label="Help" />
        </div>

        <div className="flex-1 bg-gray-100"></div>
      </div>
    </div>
  );
}

export default App;
