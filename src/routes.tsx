import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={LandingPage}/> */}
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
