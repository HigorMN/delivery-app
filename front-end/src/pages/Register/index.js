import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../utils/api';

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
    if (regex.test(email) && password.length >= minValue
    && name.length >= maxValue) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, name]);

  const handleClick = async () => {
    await api.post('/register', { email, password, name })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        push('/customer/products');
      })
      .catch(() => setIsUserInvalid(true));
  };

  return (
    <div className="register">
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
      { isUserInvalid && (
        <p data-testid="common_register__element-invalid_register">
          Mensagem de erro
        </p>
      )}
    </div>
  );
}

export default Register;
