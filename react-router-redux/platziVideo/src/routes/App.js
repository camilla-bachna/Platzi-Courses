import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home";

//explicit return or default return
const App = () => (
  //will encapsulate each component
  <BrowserRouter>
    {/* the root of our project */}
    <Route exact path="/" component={Home} />
  </BrowserRouter>
);

export default App;
