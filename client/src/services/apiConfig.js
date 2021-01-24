import axios from 'axios';

const baseUrl =
  // process.env.NODE_ENV === 'production'
    // ? 'https://challengemeapi.herokuapp.com/'
    // : 'http://localhost:3000';
    'https://challengemeapi.herokuapp.com/'

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
