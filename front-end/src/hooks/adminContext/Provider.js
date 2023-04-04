import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';
import api from '../../utils/api';
import auth from '../../utils/authentication';

function Provider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);

  const getUsers = useCallback(async () => {
    auth();
    const { data } = await api.get('/users');
    setDataUsers(data);
  }, []);

  const contextValue = useMemo(() => ({
    dataUsers,
    setDataUsers,
    getUsers,
  }), [dataUsers, getUsers]);

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
