export const getUsers = state => state.users;

export const getUser = (state, id) => getUsers(state).data[id];
export const getIds = state => getUsers(state).ids;
export const getSelectedIds = state => getUsers(state).selected;

export const getUnSelectedIds = state =>
  getIds(state).filter(id => getSelectedIds(state).indexOf(id) === -1);

export const getIsFetching = state => getUsers(state).requests !== 0;
