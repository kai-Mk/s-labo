import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.FRONTEND_URL ?? 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
