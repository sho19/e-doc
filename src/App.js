import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Authentication from './pages/userAuthentication/authentication';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/authentication' exact component={Authentication} />
      </Switch>
    </Router>
  );
}

export default App;