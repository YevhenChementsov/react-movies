import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

export default instance;
