import axios from 'axios';

// pode mudar a qualquer momento
const api = axios.create({
  baseURL: 'http://192.168.100.101:3333'
});

export default api;