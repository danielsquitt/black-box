import axios from 'axios';

export const api_client = axios.create({ baseURL: 'http://127.0.0.1:3001' });

export const front_client = axios.create();
