import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';
import api from '../../utils/api';
import productContext from '../../hooks/productContext';
import FormatDecimal from '../../utils/currencyFormart';

function Costumer() {
  const [dataProduct, setDataProduct] = useState([]);
  const { product } = useContext(productContext);
  const { push } = useHistory();

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
      <main className="products page">
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
          className="to-cart-button"
          data-testid="customer_products__button-cart"
          type="button"
          onClick={ () => push('/customer/checkout') }
          disabled={ product.length === 0 }
        >
          Ver Carrinho: R$
          <span data-testid="customer_products__checkout-bottom-value">
            { FormatDecimal(
              product.reduce((acc, cur) => acc + cur.subTotal, 0),
            )}
          </span>
        </button>
      </main>
    </>
  );
}

export default Costumer;
