import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api, { setToken } from '../../utils/api';
import SaleCard from '../../components/SaleCard';

function SellerOrders() {
  const [sellerSales, setSellerSales] = useState();
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const getSales = async () => {
      setToken(token);
      api.get('/sales')
        .then(({ data }) => {
          setSellerSales(data);
        });
    };
    getSales();
  }, [token]);

  return (
    <div>
      <Header />
      {
        sellerSales && sellerSales.map((sale) => (
          <SaleCard key={ sale.id } sale={ sale } />
        ))
      }
    </div>
  );
}

export default SellerOrders;
