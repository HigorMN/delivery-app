import React from 'react';
import { useLocation } from 'react-router-dom';
import NavSeller from '../NavSeller';
import NavCustomer from '../NavCustomer';
import NavAdmin from '../NavAdmin';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      { pathname.includes('customer') && <NavCustomer /> }
      { pathname.includes('seller') && <NavSeller /> }
      { pathname.includes('admin') && <NavAdmin />}
    </header>
  );
}
