import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Main } from "../pages/Main";

export function AppRoutes() {
  return (
    <Router>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
