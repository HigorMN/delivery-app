import axios from 'axios';

const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http';
const HOST = process.env.REACT_APP_HOSTNAME || 'localhost';
const PORT = process.env.REACT_APP_BACKEND_PORT || '3001';

const api = axios.create({
  baseURL: `${PROTOCOL}://${HOST}:${PORT}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export default api;
