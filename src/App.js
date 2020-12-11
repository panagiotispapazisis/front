import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";

class App extends Component {
  state = { users: [], name: "" };
  constructor() {
    super();
  }

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple Navbar</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
