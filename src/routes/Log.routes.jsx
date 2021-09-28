import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from "../pages/Log/Login";
import { Signup } from "../pages/Log/Signup";
import { Log } from "../layouts/Log";

export function LogRoutes() {
  return (
    <Router>
      <Redirect from="*" to="/login" />
      <Switch>
        <Route exact path="/login">
          <Log>
            <Login />
          </Log>
        </Route>
        <Route exact path="/signup">
          <Log>
            <Signup />
          </Log>
        </Route>
      </Switch>
    </Router>
  );
}
