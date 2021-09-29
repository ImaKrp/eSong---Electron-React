import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Main } from "../pages/Menu/Main";
import { Profile } from "../pages/Menu/Profile";
import { Menu } from "../layouts/Menu";

export function AppRoutes() {
  return (
    <Router>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/">
          <Menu>
            <Main />
          </Menu>
        </Route>
        <Route exact path="/profile">
          <Menu>
            <Profile />
          </Menu>
        </Route>
      </Switch>
    </Router>
  );
}
