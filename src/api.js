import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/autos',
});

export const getAutos = () => api.post('/List');
export const createAuto = (data) => api.post('/Create', data);
export const updateAuto = (data) => api.post('/Update', data);
export const deleteAuto = (data) => api.post('/Delete', data);
