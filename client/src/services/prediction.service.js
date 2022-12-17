import axios from 'axios';
import { authHeader } from './auth-header.service';

const baseUrl = 'http://localhost:8000/api/v1';

export const getRandomPredictions = (n = 5) => {
  return axios.get(`${baseUrl}/predictions/${n}`);
};
