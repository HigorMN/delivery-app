import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-orders"
        >
          MEUS PEDIDOS
        </Link>
      </nav>
      <nav>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome Completo
        </Link>
        <Link
          to="/"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </Link>
      </nav>
    </header>
  );
}
