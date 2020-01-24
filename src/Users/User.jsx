import React from "react";
import { connect } from "react-redux";
import { getUser } from "./redux/selectors";
import { selectUser, deselectUser } from "./redux/actions";

const User = ({ email, picture, onClick }) => (
  <li className="m-1 p-1 border border-gray-800">
    <button onClick={onClick}>
      <img src={picture} alt="user" />
      <div>{email}</div>
    </button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  return getUser(state, ownProps.id);
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () =>
    ownProps.selected
      ? dispatch(deselectUser(ownProps.id))
      : dispatch(selectUser(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
