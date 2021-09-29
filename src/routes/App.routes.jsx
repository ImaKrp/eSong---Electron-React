import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Main } from "../pages/Menu/Main";
import { Profile } from "../pages/Menu/Profile";
import { Player } from "../pages/Player";
import { Menu } from "../layouts/Menu";

export function AppRoutes() {
  return (
    <Router>
      <Redirect from="*" to="/" />
      <Switch>
        <Route exact path="/">
          <Menu background={true}>
            <Main />
          </Menu>
        </Route>
        <Route exact path="/profile">
          <Menu background={true}>
            <Profile />
          </Menu>
        </Route>
        <Route exact path="/song">
          <Menu background={false}>
            <Player />
          </Menu>
        </Route>
      </Switch>
    </Router>
  );
}
