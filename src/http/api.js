import axios from "axios";
    const api = axios.create({
    baseURL: "http://lv-course-project-1.test/api/v1"
    });
export default api;