import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Rooms } from './containers/Rooms.jsx';
import Posts from './containers/Posts.jsx';
import { Informations } from './containers/Informations.jsx';
import Login from './containers/login.jsx';
import Signup from './containers/signup.jsx';
import Header from './containers/Header.jsx';



function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route
          exact
          path="/rooms">
          <Rooms />
        </Route>

        <Route
          exact
          path="/posts">
          <Posts />
        </Route>

        <Route
          exact
          path="/informations">
          <Informations />
        </Route>

        <Route
          exact
          path="/login">
          <Login />
        </Route>

        <Route
          exact
          path="/signup">
          <Signup />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
