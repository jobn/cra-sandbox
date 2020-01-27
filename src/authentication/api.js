export const mockToken = "mockToken";

export function authenticate(username, password) {
  if (username === "abc" && password === "123") {
    return Promise.resolve({
      token: mockToken
    });
  }

  return Promise.reject();
}

export function validateToken(token) {
  if (token === mockToken) {
    return Promise.resolve();
  }

  return Promise.reject();
}
