import React from 'react';
import PropTypes from 'prop-types';

const ROUTE_SELLER = 'seller_order_details';
const TABLE_ORDER_ELEMENT = 'element-order-table';

function OrderTable({ saleData }) {
  const { products } = saleData;

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
        { products.map((product, index) => (
          <tr key={ product.id }>
            <td
              data-testid={
                `${ROUTE_SELLER}__${TABLE_ORDER_ELEMENT}-item-number-${index + 1}`
              }
            >
              {product.id}

            </td>
            <td
              data-testid={
                `${ROUTE_SELLER}__${TABLE_ORDER_ELEMENT}-name-${index + 1}`
              }
            >
              {product.name}

            </td>
            <td
              data-testid={
                `${ROUTE_SELLER}__${TABLE_ORDER_ELEMENT}-quantity-${index + 1}`
              }
            >
              {product.SaleProduct.quantity}

            </td>
            <td
              data-testid={
                `${ROUTE_SELLER}__${TABLE_ORDER_ELEMENT}-unit-price-${index + 1}`
              }
            >
              {Number(product.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </td>
            <td
              data-testid={
                `${ROUTE_SELLER}__${TABLE_ORDER_ELEMENT}-sub-total-${index + 1}`
              }
            >
              {(product.SaleProduct.quantity * Number(product.price))
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

OrderTable.propTypes = {
  saleData: PropTypes.shape().isRequired,
};

export default OrderTable;
