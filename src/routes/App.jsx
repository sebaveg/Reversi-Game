import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';

import StartScreen from '../containers/StartScreen';
import GameScreen from '../containers/GameScreen';
import EndScreen from '../containers/EndScreen';
import NotFound from '../components/NotFound';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={StartScreen} />
        <Route exact path="/game" component={GameScreen} />
        <Route exact path="/end" component={EndScreen} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
