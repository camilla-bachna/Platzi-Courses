import { actions } from "../actions";

/* initialize reducer: the reducer will be in charge of managing the information and putting it into the state
state: it is the state to be updated
action: action that was sent by the component to the Reduce to update */
const reducer = (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      console.log("state.mylist", state.mylist); //fist state.mylist is an empty array, if I add another one => {id: 9, cover: "http://dummyimage.com/800x600.png/604180/ffffff", title: "Alien Highway"...}
      console.log("action", action); //{type: "SET_FAVORITE", payload: {id: 2, cover: "http://dummyimage.com/800x600.png/99118E/…}}
      return {
        ...state,
        /* action.payload: is going to be the item I'm going to be waiting for in this list.
        with ternary operator check if item is already in list to avoid adding videos infinitely */
        mylist: state.mylist.find((item) => {
          return item.id === action.payload.id;
        })
          ? state.mylist
          : [...state.mylist, action.payload],
      };

    case actions.deleteFavorite:
      console.log("state.mylist", state.mylist); //{id: 2, cover: "http://dummyimage.com/800x600.png/99118E/ffffff", title: "In the Dark"...}
      console.log("action", action); //{type: "DELETE_FAVORITE", payload: 2}
      return {
        ...state,
        /* items is the original state in this case and
        we are going to transform it to return a new array with elements that meet the condition =>
        return new array without the item that matched the id */
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case actions.loginRequest:
      /* will respect the state we have and user: I will transmit the object that I am creating in my action and pass it here 
      And like this I am already assigning the elements to user */
      return { ...state, user: action.payload };

    case actions.logoutRequest:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
