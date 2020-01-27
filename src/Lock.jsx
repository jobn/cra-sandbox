import React from "react";
import { useAuthentication } from "./authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLockOpen, faLock } from "@fortawesome/free-solid-svg-icons";

const Lock = () => {
  const { authenticated, signout } = useAuthentication();

  return (
    <button onClick={() => signout()}>
      <FontAwesomeIcon icon={authenticated ? faLockOpen : faLock} size="lg" />
    </button>
  );
};

export default Lock;
