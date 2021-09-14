/* best practice actionTypes to avoid typos */
export const actions = {
  setFavorite: "SET_FAVORITE",
  deleteFavorite: "DELETE_FAVORITE",
  loginRequest: "LOGIN_REQUEST",
  logoutRequest: "LOGOUT_REQUEST",
  registerRequest: "REGISTER_REQUEST",
  getVideoSource: "GET_VIDEO_SOURCE",
  setSearch: "SET_SEARCH",
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

/* describe what we are going to do
returning an object with type and payload
type: the name that we're going to identify this description of what we're doing
payload: which would be the information that we are going to transmit to it */
export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});

export const setSearch = (payload) => ({
  type: actions.setSearch,
  payload,
});
