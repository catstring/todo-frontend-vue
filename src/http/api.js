import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: 'http://todo-app-back-laravel.test',
  withCredentials: true
});

api.interceptors.request.use(function (config) {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default api;