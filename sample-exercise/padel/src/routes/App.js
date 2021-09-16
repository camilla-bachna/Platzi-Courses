import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "../containers/Landing";
import Layout from "../components/Layout";
import Login from "../containers/Login";
import GetPin from "../containers/GetPin";
import PrivateArea from "../containers/PrivateArea";
import NotFound from "../containers/NotFound";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/getPin" component={GetPin} />
        <Route exact path="/privateArea" component={PrivateArea} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
