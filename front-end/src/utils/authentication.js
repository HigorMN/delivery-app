import api from './api';

const getAuth = () => {
  api.get('/authentication')
    .then(({ data: { status } }) => {
      if (status === +'401') return setUserAuthenticated(false);
    });
};

export default getAuth;
