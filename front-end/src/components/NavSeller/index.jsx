import React from 'react';
import Link from '../GenericLink';

const ROUTE_CUSTOMER = 'customer_products';
const ELEMENT_PRODUCTS = 'element-navbar-link-orders';
const ELEMENT_USER = 'element-navbar-user-full-name';
const ELEMENT_LOGOUT = 'element-navbar-link-logout';

export default function NavCustomer() {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = () => localStorage.removeItem('user');

  return (
    <>
      <nav>
        <Link
          to="/seller/orders"
          title="PEDIDOS"
          dataTestId={ `${ROUTE_CUSTOMER}__${ELEMENT_PRODUCTS}` }
        />
      </nav>
      <nav>
        <p
          data-testid={ `${ROUTE_CUSTOMER}__${ELEMENT_USER}` }
        >
          { localUser ? localUser.name : '' }
        </p>
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
