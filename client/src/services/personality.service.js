import axios from 'axios';
import { authHeader } from './auth-header.service';

const baseUrl = 'http://localhost:8000/api/v1';

export const getPersonalities = (gender = 0) => {
  return axios.get(`${baseUrl}/mbti-types/${gender}`);
};
