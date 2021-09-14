import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "../containers/Landing";
import Layout from "../components/Layout";
import Login from "../containers/Login";
import getPin from "../containers/getPin";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/getPin" component={getPin} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
