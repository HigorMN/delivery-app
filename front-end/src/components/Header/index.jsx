import React from 'react';
import { useLocation } from 'react-router-dom';
import NavCustomer from '../NavCustomer';

import NavAdmin from '../NavAdmin';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      { pathname.includes('customer') && <NavCustomer /> }

      { pathname.includes('admin') && <NavAdmin />}
    </header>
  );
}
