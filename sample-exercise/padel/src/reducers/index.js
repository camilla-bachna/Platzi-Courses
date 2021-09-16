import { actions } from "../actions";

const reducer = (state, action) => {
  console.log("state", state, "action", action.payload);
  switch (action.type) {
    case actions.loginRequest:
      return { ...state, user: action.payload };
    case actions.logoutRequest:
      return { ...state, user: action.payload };
    case actions.setCourts:
      return { ...state, courts: action.payload };
    case actions.setPin:
      return { ...state, pins: action.payload };
    default:
      return state;
  }
};

export default reducer;
