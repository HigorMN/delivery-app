import React from 'react';
import PropTypes from 'prop-types';
import { currencyFormat } from '../../utils/currencyFormart';

const TABLE_ORDER_ELEMENT = 'element-order-table';

function OrderTable({ saleData, route }) {
  const { products } = saleData;

  const ROUTE = route;

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        { products?.map((product, index) => (
          <tr key={ product.id }>
            <td
              data-testid={
                `${ROUTE}__${TABLE_ORDER_ELEMENT}-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `${ROUTE}__${TABLE_ORDER_ELEMENT}-name-${index + 1}`
              }
            >
              {product.name}

            </td>
            <td
              data-testid={
                `${ROUTE}__${TABLE_ORDER_ELEMENT}-quantity-${index + 1}`
              }
            >
              {product.SaleProduct.quantity}

            </td>
            <td
              data-testid={
                `${ROUTE}__${TABLE_ORDER_ELEMENT}-unit-price-${index + 1}`
              }
            >
              {currencyFormat(Number(product.price))}
            </td>
            <td
              data-testid={
                `${ROUTE}__${TABLE_ORDER_ELEMENT}-sub-total-${index + 1}`
              }
            >
              {currencyFormat(product.SaleProduct.quantity * Number(product.price))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  saleData: PropTypes.shape().isRequired,
  route: PropTypes.string.isRequired,
};

export default OrderTable;
