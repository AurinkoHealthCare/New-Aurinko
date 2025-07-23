// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2026/api', // backend ka base URL
  withCredentials: true, // cookies ko allow karega
});

export default instance;
