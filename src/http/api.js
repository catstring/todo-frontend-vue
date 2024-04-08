import axios from "axios";
    const api = axios.create({
    baseURL: "http://todo-app-back-laravel.test/api/v1"
    });
export default api;
