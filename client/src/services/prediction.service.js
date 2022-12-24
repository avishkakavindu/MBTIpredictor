import axios from 'axios';

const baseUrl = 'http://localhost:8000/api/v1';

export const getRandomPredictions = (n = 5) => {
  return axios.get(`${baseUrl}/predictions/${n}`);
};

export const getPredictionCounts = () => {
  return axios.get(`${baseUrl}/counts/`);
};
