import { combineReducers } from "redux";

import usersReducer from "../Users/redux/reducer";

export default combineReducers({ users: usersReducer });
