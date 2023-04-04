import React from 'react';
import { Redirect } from 'react-router-dom';
import Link from '../GenericLink';

export default function NavAdmin() {
  const localUser = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = () => localStorage.removeItem('user');

  if (!localUser || localUser.role !== 'administrator') {
    handleLogOut();
    return <Redirect to="/login" />;
  }
  return (
    <>
      <nav>
        <Link
          to="/admin/orders"
          title="GERENCIAR USUÁRIOS"
          dataTestId="customer_products__element-navbar-link-orders"
        />
      </nav>
      <nav>
        <p data-testid="customer_products__element-navbar-user-full-name">
          {localUser ? localUser.name : ''}
        </p>
        <Link
          to="/"
          onClick={ handleLogOut }
          title="Sair"
          dataTestId=""
        />
      </nav>
    </>
  );
}
