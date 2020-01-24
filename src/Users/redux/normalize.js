const normalize = response => {
  const user = response.results[0];

  return {
    id: user.login.uuid,
    picture: user.picture.medium,
    email: user.email
  };
};

export default normalize;
