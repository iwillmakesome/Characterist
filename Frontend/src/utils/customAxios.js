import axios from 'axios';

const BACKEND_HOST = import.meta.env.VITE_BACKEND_HOST;

export const customAxios = axios.create({
  baseURL: `${BACKEND_HOST}`,
});
