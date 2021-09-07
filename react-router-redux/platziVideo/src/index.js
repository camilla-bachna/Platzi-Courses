import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import initialState from "../initialState";
import reducer from "./reducers";
import App from "./routes/App";

/* create a new store so we can pass it to our provider */
const store = createStore(reducer, initialState);

/* render receives 2 parameters: The first is our application and the second is where the elements would be rendered.
The first is our application and the second is where the elements would be rendered.
React Redux includes a <Provider /> component, which makes the Redux store available to the rest of your app */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
