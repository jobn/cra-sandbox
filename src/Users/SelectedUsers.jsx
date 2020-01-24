import React from "react";
import { connect } from "react-redux";
import { getSelectedIds } from "./redux/selectors";

import User from "./User";

const SelectedUsers = ({ ids }) => (
  <ul>
    {ids.map(id => (
      <User id={id} key={id} selected={true} />
    ))}
  </ul>
);

const mapStateToProps = state => {
  const ids = getSelectedIds(state);

  return {
    ids
  };
};

export default connect(mapStateToProps)(SelectedUsers);
