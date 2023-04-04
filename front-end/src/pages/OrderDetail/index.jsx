import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import api from '../../utils/api';
import toStringDate from '../../utils/toStringDate';

const ROUTE_SELLER = 'seller_order-details';
const ORDER_ELEMENT = 'element-order-details';

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
        </div>
      )}
    </div>

  );
}

OrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};

export default OrderDetails;
