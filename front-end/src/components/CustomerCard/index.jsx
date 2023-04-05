import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import toStringDate from '../../utils/toStringDate';
import { currencyFormat, orderFormat } from '../../utils/currencyFormart';

const ROUTE_CUSTOMER = 'customer_orders';
const ORDER_ELEMENT = 'element-order';

function CustomerCard({ sale }) {
  const formatedDate = toStringDate(sale.saleDate);
  return (
    <div style={ { border: '1px solid black' } }>
      <Link
        to={ `/customer/orders/${sale.id}` }
      >
        <p
          data-testid={ `${ROUTE_CUSTOMER}__${ORDER_ELEMENT}-id-${sale.id}` }
        >
          Pedido:
          {' '}
          { orderFormat(sale.id || 0) }
        </p>
        <div>
          <h3
            data-testid={ `${ROUTE_CUSTOMER}__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </h3>
          <p
            data-testid={ `${ROUTE_CUSTOMER}__${ORDER_ELEMENT}-date-${sale.id}` }
          >
            { formatedDate }
          </p>
          <p
            data-testid={ `${ROUTE_CUSTOMER}__element-card-price-${sale.id}` }
          >
            { currencyFormat(Number(sale.totalPrice)) }
          </p>
        </div>
      </Link>
    </div>
  );
}

CustomerCard.propTypes = {
  sale: PropTypes.shape().isRequired,
};

export default CustomerCard;
