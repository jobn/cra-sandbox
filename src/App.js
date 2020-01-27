import React from "react";
import {
  faTruckMonster,
  faBicycle,
  faLifeRing
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Link } from "react-router-dom";
import { Container } from "./authentication";
import Lock from "./Lock";
import StoreProvider from "./store/Provider";
import Routes from "./Routes";
import MenuButton from "./MenuButton";
import HiddenMenuButton from "./HiddenMenuButton";

function App() {
  return (
    <Container>
      <StoreProvider>
        <BrowserRouter>
          <div className="w-full min-h-screen flex flex-col">
            <div className="h-20 flex flex-shrink-0 justify-between items-center px-8 bg-gray-400">
              <Link to="/" className="text-2xl text-pink-600">
                CRA Sandbox
              </Link>

              <Lock />
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

                <HiddenMenuButton />
              </div>

              <div className="flex-1 bg-gray-100">
                <Routes />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </StoreProvider>
    </Container>
  );
}

export default App;
