import axios from "axios";
    const api = axios.create({
    baseURL: "https://todo-backend-laravel-production.up.railway.app/api/v1"
    });
export default api;
