import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../utils/api';
import SaleCard from '../../components/SaleCard';
import auth from '../../utils/authentication';

function SellerOrders() {
  const [sellerSales, setSellerSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      auth();
      api.get('/sales')
        .then(({ data }) => {
          setSellerSales(data);
        });
    };
    getSales();
  }, []);

  return (
    <div>
      <Header />
      {
        sellerSales.map((sale) => (
          <SaleCard key={ sale.id } sale={ sale } />
        ))
      }
    </div>
  );
}

export default SellerOrders;
