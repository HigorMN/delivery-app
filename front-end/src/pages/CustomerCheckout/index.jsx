import React, { useContext } from 'react';
import Header from '../../components/Header';
import Context from '../../hooks/productContext';
import currencyFormart from '../../utils/currencyFormart';

const dt = 'customer_checkout__element-order-table';
export default function CustomerCheckout() {
  const { product } = useContext(Context);
  return (
    <>
      <Header />
      <h2>Finalizar pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantitade</th>
            <th>Valor Unitário</th>
            <th>Sub total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p, index) => (
            <tr key={ p.id }>
              <td data-testid={ `${dt}-item-number-${index}` }>{index + 1}</td>
              <td data-testid={ `${dt}-name-${index}` }>{p.name}</td>
              <td data-testid={ `${dt}-quantity-${index}` }>{p.quantity}</td>
              <td data-testid={ `${dt}-unit-price-${index}` }>
                {currencyFormart(Number(p.price))}
              </td>
              <td data-testid={ `${dt}-sub-total-${index}` }>
                {currencyFormart(p.subTotal)}
              </td>
              <td data-testid={ `${dt}-remove-${index}` }>
                <button type="button">
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">Total</div>
      <form>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="seller">
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
          >
            <option>Fulana</option>
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            name="address"
            type="text"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            name="number"
            type="text"
          />
        </label>
        <button
          data-testid="customer_checkout__button-submit-order"
          type="button"
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
