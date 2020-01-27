import React from "react";
import { setToken, removeToken, getToken } from "./localStorage";
import * as api from "./api";

const Context = React.createContext();

const Container = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [requestError, setRequestError] = React.useState(false);

  const signin = React.useCallback((username, password) => {
    setRequestError(false);
    api.authenticate(username, password).then(
      response => {
        setAuthenticated(true);
        setToken(response.token);
      },
      () => {
        setAuthenticated(false);
        setRequestError(true);
        removeToken();
      }
    );
  }, []);

  const signout = React.useCallback(() => {
    setAuthenticated(false);
    setRequestError(false);
    removeToken();
  }, []);

  const value = React.useMemo(
    () => ({
      signin,
      signout,
      authenticated,
      requestError
    }),
    [signin, signout, authenticated, requestError]
  );

  React.useEffect(() => {
    api.validateToken(getToken()).then(
      () => setAuthenticated(true),
      () => setAuthenticated(false)
    );
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Container, Context };
