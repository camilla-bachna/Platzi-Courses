export const actions = {
  loginRequest: "LOGIN_REQUEST",
  logoutRequest: "LOGOUT_REQUEST",
  setCourts: "SET_COURTS",
  setPin: "SET_PIN",
  setPlayer: "SET_PLAYER",
};

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const setCourts = (payload) => ({
  type: actions.setCourts,
  payload,
});

export const setPin = (payload) => ({
  type: actions.setPin,
  payload,
});

export const setPlayer = (payload) => ({
  type: actions.setPlayer,
  payload,
});
