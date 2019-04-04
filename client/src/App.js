import React, { Component } from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <Route to="/" exact component={Home} />
            <Route to="/login" exact component={Login} />
            <Route to="/users" exact component={Users} />
          </Switch>
        </main>
      </div>
    );
  }
}

function Home(props) {
  return <div>Hey this is the homepage</div>;
}

export default App;
