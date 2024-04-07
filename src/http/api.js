import axios from "axios";
    const api = axios.create({
    baseURL: "http://todo-backend-laravel.railway.internal/api/v1"
    });
export default api;
