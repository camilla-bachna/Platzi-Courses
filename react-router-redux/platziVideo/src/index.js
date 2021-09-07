import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import initialState from "../initialState";
import reducer from "./reducers";
import App from "./routes/App";

/* create a new store so we can pass it to our provider
The store has the following responsibilities:
Contains the state of the application.
Allows access to the state via getState()
Allows the state to be updated via dispatch(action)
Registers listeners via subscribe(listener)
Handles deregistration of listeners via return of subscribe(listener) function*/

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
