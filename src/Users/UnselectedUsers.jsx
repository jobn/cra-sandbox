import React from "react";
import { connect } from "react-redux";
import { getUnSelectedIds, getIsFetching } from "./redux/selectors";
import { addUser } from "./redux/actions";

import User from "./User";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const UnselectedUsers = ({ ids, addUser, isFetching }) => (
  <>
    <button
      onClick={addUser}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Click to add user
    </button>
    <ul>
      {ids.map(id => (
        <User id={id} key={id} selected={false} />
      ))}
    </ul>

    {isFetching && <FontAwesomeIcon icon={faSpinner} spin size="4x" />}
  </>
);

const mapStateToProps = state => {
  const ids = getUnSelectedIds(state);
  const isFetching = getIsFetching(state);

  return {
    ids,
    isFetching
  };
};

const mapDispatchToProps = {
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UnselectedUsers);
