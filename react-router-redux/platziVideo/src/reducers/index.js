/* initialize reducer
state: it is the state to be updated
action: action that was sent by the component to the Reduce to update */
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        /* action.payload: is going to be the item I'm going to be waiting for in this list. */
        mylist: [...state.mylist, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
