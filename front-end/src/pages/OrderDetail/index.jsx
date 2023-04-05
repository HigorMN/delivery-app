import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import api from '../../utils/api';
import toStringDate from '../../utils/toStringDate';

const ROUTE_SELLER = 'seller_order_details';
const ORDER_ELEMENT = 'element-order-details';
const TABLE_ORDER_ELEMENT = 'element-order-table';

function OrderDetails({ match }) {
  const { params: { id } } = match;
  const [saleData, setSaleData] = useState();

  useEffect(() => {
    const getSaleData = async () => {
      api.get(`/sales/${id}`)
        .then(({ data }) => {
          const saleDate = toStringDate(data.saleDate);
          setSaleData({ ...data, saleDate });
        });
    };
    getSaleData();
  }, [id]);

  return (
    <div>
      <Header />
      { saleData && (
        <div>
          Detalhe do Pedido

          <header>

            <p
              data-testid={ `${ROUTE_SELLER}__${ORDER_ELEMENT}-label-order-id` }
            >
              PEDIDO
              {' '}
              { (saleData.id).toLocaleString('pt-BR', {
                minimumIntegerDigits: 4,
                maximumIntegerDigits: 4,
                useGrouping: false,
              }) }
            </p>

            <p
              data-testid={ `${ROUTE_SELLER}__${ORDER_ELEMENT}-label-order-date` }
            >
              { saleData.saleDate }
            </p>

            <span
              data-testid={
                `${ROUTE_SELLER}__${ORDER_ELEMENT}-label-delivery-status`
              }
            >
              {saleData.status}

            </span>

            <div>
              <button
                data-testid={ `${ROUTE_SELLER}__button-preparing-check` }
                type="button"
              >
                PREPARAR PEDIDO
              </button>
              <button
                data-testid={ `${ROUTE_SELLER}__button-dispatch-check` }
                type="button"
              >
                SAIU PARA ENTREGA
              </button>
            </div>
          </header>

          <table>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
            </tr>

            <tbody>
              { saleData.products.map((product, index) => (
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
          <span
            data-testid={ `${ROUTE_SELLER}__element-order-total-price` }
            style={ { position: 'fixed', bottom: 0 } }
          >
            { 'Total: '}
            {
              (saleData.products.reduce((acc, curr) => {
                acc += (curr.SaleProduct.quantity * Number(curr.price));
                return acc;
              }, 0)).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            }
          </span>
        </div>
      )}
    </div>

  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default OrderDetails;
