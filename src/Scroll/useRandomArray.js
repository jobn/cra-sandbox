import React from "react";
import useInterval from "./useInterval";

function buildIndexArray(length) {
  return Array.from(Array(length).keys());
}

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const useRandomArray = (delay = 3000, min = 10, max = 50, enabled = true) => {
  const [state, setState] = React.useState(
    buildIndexArray(randomInRange(min, max))
  );

  useInterval(
    () => setState(buildIndexArray(randomInRange(min, max))),
    enabled ? delay : null
  );

  return state;
};

export default useRandomArray;
