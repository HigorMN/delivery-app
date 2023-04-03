import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CostumerProducts from './pages/CostumerProducts';
import ProviderProduct from './hooks/productContext/Provider';
import CustomerCheckout from './pages/CustomerCheckout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <ProviderProduct>
          <Route exact path="/customer/products" component={ CostumerProducts } />
          <Route exact path="/customer/checkout" component={ CustomerCheckout } />
        </ProviderProduct>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
