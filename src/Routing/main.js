import React from 'react';
import { Switch, Route } from 'react-router-dom'
import RandomVid   from '../components/randomvid';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={RandomVid}/>   
    </Switch>
  </main>
)

export default Main;