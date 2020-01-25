import React from "react";
import useRandomArray from "./useRandomArray";
import Element from "./Element";

const Scroll = () => {
  const elements = useRandomArray();

  const elementRef = React.useRef();
  const savedOffset = React.useRef(0);

  React.useEffect(() => {
    if (savedOffset.current) {
      window.scroll(0, elementRef.current.offsetTop - savedOffset.current);
    }

    const eventListener = () => {
      savedOffset.current = elementRef.current.offsetTop - window.scrollY;
    };

    window.addEventListener("scroll", eventListener);
    return () => {
      window.removeEventListener("scroll", eventListener);
    };
  }, [elements]);

  return (
    <div className="flex flex-col">
      {elements.map(elm => (
        <Element key={elm} elm={elm} />
      ))}

      <div ref={elementRef} className="w-40 h-40 p-3">
        <div className="w-full h-full bg-yellow-500 flex items-center justify-center">
          {elements.length}
        </div>
      </div>

      <div className="h-screen" />
    </div>
  );
};

export default Scroll;
