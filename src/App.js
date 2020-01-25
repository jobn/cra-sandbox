import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTruckMonster,
  faBicycle,
  faLifeRing
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter } from "react-router-dom";

import StoreProvider from "./store/Provider";
import Routes from "./Routes";
import MenuButton from "./MenuButton";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <div className="w-full min-h-screen flex flex-col">
          <div className="h-20 flex flex-shrink-0 justify-between items-center px-8 bg-gray-400">
            <h1 className="text-2xl text-pink-600">CRA Sandbox</h1>
            <div>
              <FontAwesomeIcon icon={faCoffee} size="lg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-1">
            <div className="flex md:flex-col bg-gray-600">
              <MenuButton path="/users" label="Users" icon={faTruckMonster} />
              <MenuButton path="/scroll" label="Scroll" icon={faBicycle} />
              <MenuButton
                path="/some-other-place"
                label="Help"
                icon={faLifeRing}
              />
            </div>

            <div className="flex-1 bg-gray-100 overflow-scroll">
              <Routes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
