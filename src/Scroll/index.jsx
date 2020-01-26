import React from "react";
import useRandomArray from "./useRandomArray";
import useScrollRestoration from "./useScrollRestoration";
import Element from "./Element";

const Scroll = () => {
  const elements = useRandomArray();
  const elementsRef = useScrollRestoration(elements);

  return (
    <div className="flex flex-col">
      {elements.map(id => (
        <Element key={id} id={id} />
      ))}

      <div ref={elementsRef} className="w-40 h-40 p-3">
        <div className="w-full h-full bg-yellow-500 flex items-center justify-center">
          {elements.length}
        </div>
      </div>

      <div className="h-screen" />
    </div>
  );
};

export default Scroll;
