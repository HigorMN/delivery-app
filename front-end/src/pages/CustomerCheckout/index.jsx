import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';
import Header from '../../components/Header';
import Context from '../../hooks/productContext';
import FormatDecimal from '../../utils/currencyFormart';

const dt = 'customer_checkout__element-order-table';
export default function CustomerCheckout() {
  const { push } = useHistory();
  const { product, setProduct } = useContext(Context);

  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellerData, setSellerData] = useState([]);
  const [sellerId, setSellerId] = useState('');
  const [totalPrice, setTotalPrice] = useState(
    product.reduce((acc, cur) => acc + cur.subTotal, 0),
  );
  const getSeller = async () => {
    const { data } = await api.get('/user/seller');
    setSellerData(data);
    setSellerId(data[0].id);
  };

  useEffect(() => { getSeller(); }, []);

  const handleClick = () => {
    api.post('/sale', { sellerId, totalPrice, deliveryAddress, deliveryNumber, product })
      .then((res) => push(`/customer/orders/${res.data.id}`));
  };

  const removeItem = (index) => {
    const itens = product.filter((_p, i) => i !== index);
    setProduct(itens);
    setTotalPrice(FormatDecimal(
      itens.reduce((acc, cur) => acc + cur.subTotal, 0),
    ));
  };

  return (
    <>
      <Header />
      <div className="checkout page">
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
                  {FormatDecimal(Number(p.price))}
                </td>
                <td data-testid={ `${dt}-sub-total-${index}` }>
                  {FormatDecimal(p.subTotal)}
                </td>
                <td data-testid={ `${dt}-remove-${index}` }>
                  <button
                    onClick={ () => removeItem(index) }
                    type="button"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justified-between">
          <h2>Detalhes e Endereço para Entrega</h2>
          <div className="total-box">
            <h3>
              Total:
            </h3>
            <p data-testid="customer_checkout__element-order-total-price">
              {FormatDecimal(totalPrice)}
            </p>
          </div>
        </div>
        <form>
          <label htmlFor="seller">
            P. Vendedora Responsável:
            <select
              data-testid="customer_checkout__select-seller"
              name="seller"
              value={ sellerId }
              onChange={ ({ target: { value } }) => setSellerId(value) }
            >
              {sellerData.map((e, index) => (
                <option key={ index } value={ e.id }>{e.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="address">
            Endereço
            <input
              className="address-input"
              data-testid="customer_checkout__input-address"
              name="address"
              type="text"
              value={ deliveryAddress }
              onChange={ (e) => setDeliveryAddress(e.target.value) }
            />
          </label>
          <label htmlFor="number">
            Número
            <input
              data-testid="customer_checkout__input-address-number"
              name="number"
              type="text"
              value={ deliveryNumber }
              onChange={ (e) => setDeliveryNumber(e.target.value) }
            />
          </label>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="button"
            onClick={ handleClick }
          >
            FINALIZAR PEDIDO
          </button>
        </form>
      </div>
    </>
  );
}
