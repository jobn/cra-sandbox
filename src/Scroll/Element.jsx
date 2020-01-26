import React from "react";

const Element = ({ id }) => (
  <div className="w-40 h-40 p-3">
    <div className="w-full h-full bg-green-500 flex items-center justify-center">
      {id}
    </div>
  </div>
);

export default Element;
