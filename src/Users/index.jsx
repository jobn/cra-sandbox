import React from "react";

import UnselectedUsers from "./UnselectedUsers";
import SelectedUsers from "./SelectedUsers";

export const Users = () => {
  return (
    <div className="w-full flex">
      <div className="p-4">
        <UnselectedUsers />
      </div>

      <div className="p-4 mt-9">
        <SelectedUsers />
      </div>
    </div>
  );
};

export default Users;
