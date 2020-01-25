import React from "react";

const Element = ({ elm }) => (
  <div className="w-40 h-40 p-3">
    <div className="w-full h-full bg-green-500 flex items-center justify-center">
      {elm}
    </div>
  </div>
);

export default Element;
