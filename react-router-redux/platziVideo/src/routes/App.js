import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Layout";

//explicit return or default return because it contains only the visual part of project
const App = () => (
  //will encapsulate each component
  <BrowserRouter>
    <Layout>
      <Switch>
        {/* the root of our project, the first rendering element of our application */}
        <Route exact path="/" component={Home} />
        {/* exact route So when someone enters the slash login he will go directly there */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
