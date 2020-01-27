import React from "react";
import { Redirect } from "react-router-dom";
import { Context } from "./Container";

const Form = () => {
  const {
    authenticated,
    authenticationRequestError,
    signin
  } = React.useContext(Context);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signin(username, password);
  };

  if (authenticated) {
    return <Redirect to="/users" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-xl">Sign in</div>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        username (hint: abc)
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-2">
        password (hint: 123)
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>

      {authenticationRequestError && (
        <div className="color-red mb-2">Something went wrong</div>
      )}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in
      </button>
    </form>
  );
};

export default Form;
