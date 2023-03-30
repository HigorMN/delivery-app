import React from 'react';
import PropTypes from 'prop-types';

export default function CardProduct(props) {
  const { id, price, image, name, quantity } = props;
  return (
    <div>
      <div>
        <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
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
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
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
  quantity: 0,
};

CardProduct.propTypes = {
  id: PropTypes.number,
  price: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  quantity: PropTypes.number,
};
