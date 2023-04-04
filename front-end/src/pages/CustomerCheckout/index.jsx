import React, { useContext, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import api from '../../utils/api';
import Header from '../../components/Header';
import Context from '../../hooks/productContext';
import currencyFormart from '../../utils/currencyFormart';

const dt = 'customer_checkout__element-order-table';
export default function CustomerCheckout() {
  // const { push } = useHistory();
  const { product, setProduct } = useContext(Context);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [total, setTotal] = useState(currencyFormart(
    product.reduce((acc, cur) => acc + cur.subTotal, 0),
  ));
  // const [seller, setSeller] = useState([]);
  // const [email, setEmail] = useState([]);

  // const handleClick = () => {
  //   setEmail(JSON.parse(localStorage.getItem('user')));
  //   const findUser = email.find((e) => e.email === email);

  //   const sale = {
  //     userId: findUser.id,
  //     sellerId: seller,
  //     totalPrice: Number(total),
  //     deliveryAddress: address,
  //     deliveryNumber: number,
  //   };
  //   api
  //     .post('/customer/checkout', { sale })
  //     .then((res) => {
  //       localStorage.setItem('sale', JSON.stringify(res.data));
  //       setUserAuthenticated(res.data.role);
  //     })
  //     .catch((err) => {
  //       if (err.response.status === +'404') { return setInputError('Email não existe'); }
  //     });
  //   push(`/customer/orders/${id}`);
  // };

  const removeItem = (index) => {
    const itens = product.filter((_p, i) => i !== index);
    setProduct(itens);
    setTotal(currencyFormart(
      itens.reduce((acc, cur) => acc + cur.subTotal, 0),
    ));
  };

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
                <button
                  onClick={ () => removeItem(index) }
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>
        Total:
      </h3>
      <p data-testid="customer_checkout__element-order-total-price">
        {total}
      </p>
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
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-address-number"
            name="number"
            type="text"
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
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
    </>
  );
}
