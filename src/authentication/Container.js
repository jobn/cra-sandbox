import React from "react";
import { setToken, removeToken, getToken } from "./localStorage";
import * as api from "./api";

const Context = React.createContext();

const Container = ({ children }) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [
    authenticationRequestError,
    setAuthenticationRequestError
  ] = React.useState(false);

  const signin = React.useCallback(
    (username, password) => {
      setAuthenticationRequestError(false);
      api.authenticate(username, password).then(
        response => {
          setAuthenticated(true);
          setToken(response.token);
        },
        () => {
          setAuthenticated(false);
          setAuthenticationRequestError(true);
          removeToken();
        }
      );
    },
    [setAuthenticated, setAuthenticationRequestError]
  );

  const signout = React.useCallback(() => {
    setAuthenticated(false);
    setAuthenticationRequestError(false);
    removeToken();
  }, [setAuthenticated, setAuthenticationRequestError]);

  const value = React.useMemo(
    () => ({
      signin,
      signout,
      authenticated,
      authenticationRequestError
    }),
    [signin, signout, authenticated, authenticationRequestError]
  );

  React.useEffect(() => {
    console.log("validation");
    api.validateToken(getToken()).then(
      () => setAuthenticated(true),
      () => setAuthenticated(false)
    );
  }, []);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Container, Context };
