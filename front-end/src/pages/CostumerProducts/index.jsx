import React, { useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import api from '../../utils/api';

function Costumer() {
  const [dataProduct, setDataProduct] = useState([]);

  const getProduct = async () => {
    const { data } = await api.get('/products');
    setDataProduct(data);
  };

  useEffect(() => {
    getProduct();
  });

  return (
    <>
      <Header />
      <main>
        { dataProduct.map((e, index) => (
          <CardProduct
            key={ index }
            id={ e.id }
            image={ e.urlImage }
            name={ e.name }
            price={ e.price }
            quantity={ 0 }
          />
        ))}
      </main>
    </>
  );
}

export default Costumer;
