import axios from 'axios';

import { authHeader } from './auth-header.service';

const baseUrl = 'http://localhost:8000/api/v1';

export const getRandomPredictions = (n = 5) => {
  return axios.get(`${baseUrl}/predictions/${n}`, { headers: authHeader() });
};

export const getPredictionCounts = () => {
  return axios.get(`${baseUrl}/counts/`);
};

export const predict = (text) => {
  return axios.post(`${baseUrl}/predict`, { text }, { headers: authHeader() });
};

export const updatePredict = (id, payload) => {
  return axios.patch(`${baseUrl}/predict/${id}`, payload, {
    headers: authHeader(),
  });
};
