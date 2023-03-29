import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <Redirect to="/login" />

      <div>
        <img src="" alt="" />
        <h1>nome app</h1>
        <form>
          <label htmlFor="login">
            Login
            <input type="email" id="login" data-testid="common_login__input-email" />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              data-testid="common_login__input-password"
            />

          </label>

          <button type="submit" data-testid="common_login__button-login">LOGIN</button>
          <button type="button" data-testid="common_login__button-register">
            Ainda não tenho conta
          </button>
        </form>
        <p data-testid="common_login__element-invalid-email">Mensagem de erro</p>
      </div>

    </>
  );
}
