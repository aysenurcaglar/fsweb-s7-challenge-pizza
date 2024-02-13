import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import HomePage from './HomePage';
import OrderPizza from './OrderPizza';
import Success from './Success';




function App() {

  return (
    <>
      <div className="content-section">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/order">
            <OrderPizza />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
