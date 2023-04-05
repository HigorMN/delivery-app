import { setToken } from './api';

const auth = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  setToken(user.token);
};

export default auth;
