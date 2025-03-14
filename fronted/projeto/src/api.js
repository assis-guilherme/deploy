// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // URL do seu backend Node.js
});

export default api;
