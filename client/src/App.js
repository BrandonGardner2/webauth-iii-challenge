import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route
} from "react-router-dom";
import "./App.css";

import ProtectedRoute from "./auth/protectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import axios from "axios";

axios.defaults.baseURL = process.env.API_URL || "http://localhost:5000/api";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <nav>
              <NavLink to="/" exact>
                Home
              </NavLink>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/users">Users</NavLink>
            </nav>
          </header>

          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/users" component={Users} />
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}
