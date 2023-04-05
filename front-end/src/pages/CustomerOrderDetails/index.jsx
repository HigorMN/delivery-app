import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import OrderTable from '../../components/OrderTable';
import api from '../../utils/api';
import toStringDate from '../../utils/toStringDate';
import { currencyFormat, orderFormat } from '../../utils/currencyFormart';
import auth from '../../utils/authentication';

export default function CustomerOrderDetails({ match }) {
  const { params: { id } } = match;
  const [saleData, setSaleData] = useState({});

  const getSaleData = useCallback(async () => {
    auth();
    api.get(`/sales/${id}`)
      .then(({ data }) => {
        const saleDate = toStringDate(data.saleDate);
        setSaleData({ ...data, saleDate });
      });
  }, [id]);

  useEffect(() => {
    getSaleData();
  }, [getSaleData]);

  const handleChangeStatus = ({ target: { value } }) => {
    auth();
    api.put(`/sales/${id}`, { status: value })
      .then(() => getSaleData())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div>
        <p
          data-testid={
            `customer_order_details__element-order-details-label-order-${id}`
          }
        >
          PEDIDO
          {' '}
          { orderFormat(saleData.id || 0)}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { saleData.seller?.name }
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          { saleData.saleDate }
        </p>
        <span
          data-testid="
          customer_order_details__element-order-details-label-delivery-status"
        >
          {saleData.status || ''}
        </span>

        <div>
          <button
            onClick={ handleChangeStatus }
            value="Entregue"
            disabled={ saleData.status !== 'Em Trânsito' }
            data-testid="customer_order_details__button-delivery-check"
            type="button"
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>

      </div>
      <OrderTable saleData={ saleData } route="customer_order_details" />
      <div>
        <span
          data-testid="customer_order_details__element-order-total-price"
          style={ { position: 'fixed', bottom: 0 } }
        >
          { 'Total: '}
          {(currencyFormat(Number(saleData.totalPrice)))}
        </span>
      </div>
    </>
  );
}

CustomerOrderDetails.propTypes = {
  match: PropTypes.shape().isRequired,
};
