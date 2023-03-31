import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CardProduct(props) {
  const [quantity, setQuantity] = useState(0);
  const { id, price, image, name } = props;
  return (
    <div>
      <div>
        <p data-testid={ `customer_products__element-card-price-${id}` }>
          {Number(price).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
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
      <div>
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ quantity > 0 ? () => setQuantity(quantity - 1) : () => {} }
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          onChange={ ({ target: { value } }) => setQuantity(value) }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setQuantity(quantity + 1) }
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
