import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import toStringDate from '../../utils/toStringDate';

const ROUTE_SELLER = 'seller_orders';
const ORDER_ELEMENT = 'element-order';

function SaleCard({ sale }) {
  const formatedDate = toStringDate(sale.saleDate);
  return (
    <div className="order-card">
      <Link
        to={ `/seller/orders/${sale.id}` }
      >
        <div className="flex justified-between">
          <p
            className="order-number"
            data-testid={ `${ROUTE_SELLER}__${ORDER_ELEMENT}-id-${sale.id}` }
          >
            Pedido:
            {' '}
            { (sale.id).toLocaleString('pt-BR', {
              minimumIntegerDigits: 4,
              maximumIntegerDigits: 4,
              useGrouping: false,
            }) }
          </p>

          <h3
            data-testid={ `${ROUTE_SELLER}__element-delivery-status-${sale.id}` }
          >
            { sale.status }
          </h3>
        </div>
        <div className="flex justified-between">
          <p
            data-testid={ `${ROUTE_SELLER}__${ORDER_ELEMENT}-date-${sale.id}` }
          >
            { formatedDate }
          </p>
          <p
            className="on-card-order-value"
            data-testid={ `${ROUTE_SELLER}__element-card-price-${sale.id}` }
          >
            { Number(sale.totalPrice).toLocaleString(
              'pt-BR',
              {
                style: 'currency',
                currency: 'BRL',
                minimunFractionDigits: 2,
                maximumFracionDigits: 2,
              },
            ) }
          </p>
        </div>

        <p
          data-testid={ `seller_orders__element-card-address-${sale.id}` }
        >
          { sale.deliveryAddress }
          {', '}
          { sale.deliveryNumber }
        </p>
      </Link>
    </div>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape().isRequired,
};

export default SaleCard;
