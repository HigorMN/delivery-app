import React, { useContext, useEffect, useState } from 'react';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import api from '../../utils/api';
import productContext from '../../hooks/productContext';
import currencyFormart from '../../utils/currencyFormart';

function Costumer() {
  const [dataProduct, setDataProduct] = useState([]);
  const { product } = useContext(productContext);

  const getProduct = async () => {
    const { data } = await api.get('/products');
    setDataProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

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
          />
        ))}
        <button
          data-testid="customer_products__button-cart"
          type="button"
        >
          Ver Carrinho: R$
          <span data-testid="customer_products__checkout-bottom-value">
            { currencyFormart(
              product.reduce((acc, cur) => acc + cur.subTotal, 0),
            )}
          </span>
        </button>
      </main>
    </>
  );
}

export default Costumer;
