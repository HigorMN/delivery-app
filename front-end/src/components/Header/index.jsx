import React from 'react';
import { useLocation } from 'react-router-dom';
import NavSeller from '../NavSeller';
import NavCustomer from '../NavCustomer';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header>
      { pathname.includes('customer') && <NavCustomer /> }
      { pathname.includes('seller') && <NavSeller /> }
    </header>
  );
}
