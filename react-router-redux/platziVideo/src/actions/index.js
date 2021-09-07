/* payload: which would be the information that we are going to transmit to it
type: the name that we're going to identify this description of what we're doing */

export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});
