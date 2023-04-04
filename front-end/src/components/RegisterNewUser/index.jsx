import React, { useState } from 'react';

export default function RegisterNewUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');

  return (
    <>
      <h3>Cadastrar Novo Usuario</h3>
      <form>
        <label htmlFor="name">
          <p>Nome</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
          />
        </label>
        <label htmlFor="email">
          <p>E-mail</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
          />
        </label>
        <label htmlFor="password">
          <p>Senha</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            data-testid="admin_manage__input-password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
          />
        </label>
        <label htmlFor="role">
          <p>Tipo</p>
          <select
            name="role"
            id="role"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target: { value } }) => setRole(value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ name.length < +'12' || !(/\S+[@]\w+[.]\w+/gi.test(email)) || password.length < +'6' }
        >
          CADASTRAR
        </button>
      </form>
    </>
  );
}
