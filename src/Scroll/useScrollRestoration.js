import React from "react";

const useScrollRestoration = (...deps) => {
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
  }, deps);

  return elementRef;
};

export default useScrollRestoration;
