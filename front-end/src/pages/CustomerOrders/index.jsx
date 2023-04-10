import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../utils/api';
import auth from '../../utils/authentication';
import CustomerCard from '../../components/CustomerCard';

export default function CustomerOrders() {
  const [customerSales, setCustomerSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      auth();
      api.get('/sales')
        .then(({ data }) => {
          setCustomerSales(data);
        });
    };
    getSales();
  }, []);

  return (
    <>
      <Header />
      <div className="orders page">
        {
          customerSales.map((sale) => (
            <CustomerCard key={ sale.id } sale={ sale } />
          ))
        }
      </div>
    </>
  );
}
