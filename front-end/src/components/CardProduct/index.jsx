import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import productContext from '../../hooks/productContext';
import FormatDecimal from '../../utils/currencyFormart';

export default function CardProduct(props) {
  const { id, price, image, name } = props;
  const { product, setProduct } = useContext(productContext);
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (value) => {
    setQuantity(value);
    const findId = product.find((e) => e.id === id);
    if (value === 0) return setProduct(product.filter((e) => e.id !== id));

    if (findId) {
      findId.quantity = value < 0 ? 0 : value;
      findId.subTotal = value * price;
      return setProduct([...product]);
    }

    return setProduct([
      ...product,
      { id, price, name, quantity: value, subTotal: value * price },
    ]);
  };

  return (
    <div className="product-card">
      <div>
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          {FormatDecimal(Number(price))}
        </p>
        <img
          src={ image }
          alt={ name }
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div>
        <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      </div>
      <div className="quantity-box">
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ quantity > 0 ? () => handleQuantity(quantity - 1) : () => {} }
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          min="0"
          onChange={ ({ target: { value } }) => handleQuantity(+value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => handleQuantity(quantity + 1) }
        >
          +
        </button>
      </div>
    </div>
  );
}

CardProduct.defaultProps = {
  id: 0,
  price: '0',
  image: '',
  name: '',
};

CardProduct.propTypes = {
  id: PropTypes.number,
  price: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};
