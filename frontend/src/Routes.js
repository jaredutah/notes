import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

import Home from './containers/Home';
import Login from './containers/Login';
import NewNote from './containers/NewNote';
import NotFound from './containers/NotFound';
import Signup from './containers/Signup';
import Notes from './containers/Notes';
import Settings from './containers/Settings';

export default function Routes() {
  return (
    <Switch>
      <UnauthenticatedRoute exact path='/login'>
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path='/signup'>
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path='/settings'>
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path='/notes/new'>
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path='/notes/:id'>
        <Notes />
      </AuthenticatedRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}