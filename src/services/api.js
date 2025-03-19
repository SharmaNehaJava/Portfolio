import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Backend API base URL
  headers: { "Content-Type": "application/json" },
});

// Add token to headers for authenticated routes
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
