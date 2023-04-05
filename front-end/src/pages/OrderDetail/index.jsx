import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import api, { setToken } from '../../utils/api';
import toStringDate from '../../utils/toStringDate';
import OrderTable from '../../components/OrderTable';

const ROUTE_SELLER = 'seller_order_details';
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
          // setCurrentStatus(saleData.status);
        });
    };
    getSaleData();
  }, [id, saleData]);

  const handleChangeStatus = ({ target: { value } }) => {
    const { token } = localStorage.getItem('user');
    setToken(token);
    api.put(`/sales/${id}`, { status: value })
      .catch((err) => console.log(err));
  };

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
              {saleData.status || ''}

            </span>

            <div>
              <button
                onClick={ handleChangeStatus }
                value="Preparando"
                disabled={ saleData.status !== 'Pendente' }
                data-testid={ `${ROUTE_SELLER}__button-preparing-check` }
                type="button"
              >
                PREPARAR PEDIDO
              </button>
              <button
                onClick={ handleChangeStatus }
                value="Em Trânsito"
                disabled={ saleData.status !== 'Preparando' }
                data-testid={ `${ROUTE_SELLER}__button-dispatch-check` }
                type="button"
              >
                SAIU PARA ENTREGA
              </button>
            </div>
          </header>

          <OrderTable saleData={ saleData } />

          <span
            data-testid={ `${ROUTE_SELLER}__element-order-total-price` }
            style={ { position: 'fixed', bottom: 0 } }
          >
            { 'Total: '}
            {
              (Number(saleData.totalPrice)).toLocaleString('pt-BR', {
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
