import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isUserInvalid, setIsUserInvalid] = useState(false);
  const { push } = useHistory();

  useEffect(() => {
    const minValue = 6;
    const maxValue = 12;
    const regex = /\S+[@]\w+[.]\w+/gi;
    if (regex.test(email) && password.length >= minValue && name.length >= maxValue) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, name]);

  const handleClick = async () => {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
    const numberError = 409;
    const user = await response.json();
    if (response.status === numberError) {
      setIsUserInvalid(true);
      return;
    }
    console.log(user);
    if (user.role === 'customer') {
      push('/customer/products');
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">
          Nome
          <input
            name="name"
            type="text"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            name="password"
            type="password"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ handleClick }
          disabled={ isButtonDisabled }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      <p
        data-testid="common_register__element-invalid_register"
        style={ { display: isUserInvalid ? 'block' : 'none' } }
      >
        Mensagem de erro
      </p>
    </div>
  );
}

export default Register;