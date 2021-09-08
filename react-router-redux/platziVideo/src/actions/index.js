/* best practice actionTypes to avoid typos */
export const actions = {
  setFavorite: "SET_FAVORITE",
  deleteFavorite: "DELETE_FAVORITE",
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

/* describe what we are going to do
returning an object with type and payload
payload: which would be the information that we are going to transmit to it
type: the name that we're going to identify this description of what we're doing */
export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});
