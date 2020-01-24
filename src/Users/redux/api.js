export const getUser = () =>
  fetch("https://randomuser.me/api/").then(response => response.json());
