import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CostumerProducts from './pages/CostumerProducts';
import ProviderProduct from './hooks/productContext/Provider';
import CustomerCheckout from './pages/CustomerCheckout';
import SellerOrders from './pages/SellerOrders';
import AdminManage from './pages/AdminManage';
import ProviderAuth from './hooks/authContext/Provider';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <ProviderAuth>
          <ProviderProduct>
            <Route exact path="/customer/products" component={ CostumerProducts } />
            <Route exact path="/customer/checkout" component={ CustomerCheckout } />
          </ProviderProduct>
          <Route exact path="/seller/orders" component={ SellerOrders } />
          <Route exact path="/admin/manage" component={ AdminManage } />
        </ProviderAuth>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
