import React from "react";

const buildIndexArray = length => Array.from(Array(length).keys());
const randomInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const useRandomArray = (time = 3000, min = 10, max = 50, enabled = true) => {
  const [state, setState] = React.useState(
    buildIndexArray(randomInRange(min, max))
  );

  React.useEffect(() => {
    if (!enabled) {
      return () => {};
    }

    const interval = setInterval(() => {
      setState(buildIndexArray(randomInRange(min, max)));
    }, time);

    return () => clearInterval(interval);
  }, [enabled, time, min, max]);

  return state;
};

export default useRandomArray;
