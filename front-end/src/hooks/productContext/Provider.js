import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '.';

function Provider({ children }) {
  const [product, setProduct] = useState([]);

  const contextValue = useMemo(() => ({ product, setProduct }), [product]);

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
