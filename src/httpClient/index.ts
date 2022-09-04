import axios from 'axios';
import { BASE_API_URL } from 'config';

const httpClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: 'application/vnd.github+json',
  },
});

export default httpClient;
