import axios from 'axios';

import { authHeader } from './auth-header.service';

const baseUrl = 'http://localhost:8000/api/v1';

export const signup = (email, password) => {
  return axios
    .post(`${baseUrl}/auth/users`, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    });
};

export const login = (email, password) => {
  return axios
    .post(`${baseUrl}/auth/jwt/create`, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  return axios
    .get(`${baseUrl}/auth/users/me/`, { headers: authHeader() })
    .then((response) => {
      return response.data;
    });
};
