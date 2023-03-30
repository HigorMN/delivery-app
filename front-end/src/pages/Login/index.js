import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if (localUser) setIsLogged(true);
  }, []);

  const handleSubmit = async () => {
    api.post('/login', { email, password })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        setIsLogged(true);
      })
      .catch((err) => {
        if (err.response.status === +'404') return setInputError('Email não existe');
      });
  };

  if (isLogged) return <Redirect to="/customer/products" />;

  return (
    <div>
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
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </form>
        { inputError
           && <p data-testid="common_login__element-invalid-email">{inputError}</p>}
      </div>
    </div>
  );
}
