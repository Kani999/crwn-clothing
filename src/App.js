import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>hats Page</h1>
  </div>
)

function App() {
  return <div>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>

  </div>;
}

export default App;
