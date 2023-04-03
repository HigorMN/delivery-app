import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Context from '.';
import getAuth from '../../utils/authentication';
import { setToken } from '../../utils/api';

function Provider({ children }) {
  const [product, setProduct] = useState([]);
  const [userAuthenticated, setUserAuthenticated] = useState(true);

  const contextValue = useMemo(() => ({ product, setProduct }), [product]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return setUserAuthenticated(false);

    setToken(user.token);
    getAuth();
  }, []);

  if (!userAuthenticated) return <Redirect to="/login" />;

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
