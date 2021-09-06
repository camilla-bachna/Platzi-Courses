import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./routes/App";

/* render receives 2 parameters: The first is our application and the second is where the elements would be rendered.
The first is our application and the second is where the elements would be rendered. */
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
