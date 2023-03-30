import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import api from '../../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const { push } = useHistory();

  const handleSubmit = async () => {
    api.post('/login', { email, password })
      .then(() => {
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response.status === +'404') return setInputError('Email não existe');
      });
  };

  if (isLogged) return <Redirect to="/customer/products" />;

  return (
    <>
      <Redirect to="/login" />
      <div>
        <img src="" alt="" />
        <h1>nome app</h1>
        <form>
          <label htmlFor="login">
            Login
            <input
              value={ email }
              onChange={ ({ target: { value } }) => setEmail(value) }
              type="email"
              id="login"
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              onChange={ ({ target: { value } }) => setPassword(value) }
              value={ password }
              type="password"
              id="password"
              data-testid="common_login__input-password"
            />

          </label>

          <button
            onClick={ handleSubmit }
            disabled={ !(password.length >= +'6' && /\S+[@]\w+[.]\w+/gi.test(email)) }
            type="button"
            data-testid="common_login__button-login"
          >
            LOGIN

          </button>
          <button
            onClick={ () => push('/register') }
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </form>
        { inputError
         && <p data-testid="common_login__element-invalid-email">{inputError}</p>}
      </div>

    </>
  );
}
