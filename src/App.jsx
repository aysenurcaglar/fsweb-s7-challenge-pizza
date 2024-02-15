import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage';
import OrderPizza from './OrderPizza';
import Success from './Success';

const App = () => {
  const [responseData, setResponseData] = useState('');

  const handleOrderSubmit = (data) => {
    console.log(data);
    setResponseData(data);
  };

  return (
    <>
      <div className="content-section">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/order">
            <OrderPizza handleOrderSubmit={handleOrderSubmit} />
          </Route>
          <Route exact path="/success">
            <Success responseData={responseData} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
