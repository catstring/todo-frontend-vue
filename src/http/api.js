import axios from "axios";
    const api = axios.create({
    baseURL: "https://todo-backend-laravel.railway.internal/api/v1"
    });
export default api;
