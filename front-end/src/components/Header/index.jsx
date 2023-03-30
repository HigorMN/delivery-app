import React from 'react';
import Link from '../GenericLink';

const ROUTE_CUSTOMER = 'customer_products';
const ELEMENT_PRODUCTS = 'element-navbar-link-products';
const ELEMENT_ORDERS = 'element-navbar-link-orders';
const ELEMENT_USER = 'element-navbar-user-full-name';
const ELEMENT_LOGOUT = 'element-navbar-link-logout';

export default function Header() {
  return (
    <header>
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
          title="Nome Completo"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_USER}` }
        />
        <Link
          to="/"
          title="Sair"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_LOGOUT}` }
        />
      </nav>
    </header>
  );
}
