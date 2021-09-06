import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";

//explicit return or default return because it contains only the visual part of project
const App = () => (
  //will encapsulate each component
  <BrowserRouter>
    {/* the root of our project */}
    <Route exact path="/" component={Home} />
    {/* exact route So when someone enters the slash login he will go directly there */}
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
);

export default App;
