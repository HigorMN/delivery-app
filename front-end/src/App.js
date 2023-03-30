import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import CostumerProducts from './pages/CostumerProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ CostumerProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
