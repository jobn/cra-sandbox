const KEY_NAME = "authToken";

export function getToken() {
  return window.localStorage.getItem(KEY_NAME);
}

export function setToken(value) {
  window.localStorage.setItem(KEY_NAME, value);
}

export function removeToken() {
  window.localStorage.removeItem(KEY_NAME);
}
