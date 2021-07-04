import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Rooms } from './containers/Rooms.jsx';
import { Posts } from './containers/Posts.jsx';
import { Informations } from './containers/Informations.jsx';

function App() {
  return (
    <Router>
      <Switch>

        <Route
          exact
          path="/rooms">
          <Rooms />
        </Route>

        <Route
          exact
          path="/posts"
        >
          <Posts />
        </Route>

        <Route
          exact
          path="/informations">
          <Informations />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
