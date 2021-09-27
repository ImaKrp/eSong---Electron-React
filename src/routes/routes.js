import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login } from "../pages/Login";
import { Log } from "../layouts/Log";

export function Routes() {
  return (
    <Router>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/">
          <Log>
            <Login />
          </Log>
        </Route>
      </Switch>
    </Router>
  );
}
