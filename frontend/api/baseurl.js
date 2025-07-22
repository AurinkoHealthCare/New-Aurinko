// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2026/api", // <-- yaha base URL set karo
  withCredentials: true,
});

export default axiosInstance;
