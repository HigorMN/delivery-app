import React from 'react';
import { Redirect } from 'react-router-dom';
import Link from '../GenericLink';

const ROUTE_CUSTOMER = 'customer_products';
const ELEMENT_PRODUCTS = 'element-navbar-link-products';
const ELEMENT_ORDERS = 'element-navbar-link-orders';
const ELEMENT_USER = 'element-navbar-user-full-name';
const ELEMENT_LOGOUT = 'element-navbar-link-logout';

export default function NavCustomer() {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = () => localStorage.removeItem('user');

  if (!localUser || localUser.role !== 'customer') {
    handleLogOut();
    return <Redirect to="/login" />;
  }

  return (
    <>
      <nav>
        <Link
          to="/"
          title="PRODUTOS"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_PRODUCTS}` }
        />
        <Link
          to="/"
          title="MEUS PEDIDOS"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_ORDERS}` }
        />
      </nav>
      <nav>
        <Link
          to="/"
          title={ localUser ? localUser.name : '' }
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_USER}` }
        />
        <Link
          to="/"
          onClick={ handleLogOut }
          title="Sair"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_LOGOUT}` }
        />
      </nav>
    </>
  );
}
