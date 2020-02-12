/* eslint-disable react-hooks/exhaustive-deps */
/*
  The dependency array is built using the rest operator.
  It wil therefore always be an array. But since it is not an
  array literal the lint rule will complain about it
*/

import React from "react";

const useScrollRestoration = (...deps) => {
  const elementRef = React.useRef();
  let offset;

  if (elementRef.current) {
    offset = elementRef.current.offsetTop - window.scrollY;
  }

  React.useLayoutEffect(() => {
    if (typeof offset !== "undefined") {
      window.scroll(0, elementRef.current.offsetTop - offset);
    }
  }, deps);

  return elementRef;
};

export default useScrollRestoration;
