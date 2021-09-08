import { actions } from "../actions";

/* initialize reducer
state: it is the state to be updated
action: action that was sent by the component to the Reduce to update */
const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      return {
        ...state,
        /* action.payload: is going to be the item I'm going to be waiting for in this list. */
        mylist: [...state.mylist, action.payload],
      };
    case actions.deleteFavorite:
      return {
        ...state,
        /* items is the original state in this case and
        we are going to transform it to return a new array, but with the condition that we are passing */
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
