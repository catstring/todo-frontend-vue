import api from "./api"

const baseURL = "/toddo-api"

export const csrfCookie = () => api.get(`/sanctum/csrf-cookie`)

// export const login = async (credentials) => {
//         const response = await api.post('/auth/login', credentials);
//         return response.data
// }

export const login = async (credentials) => {
    try {
        const response = await api.post(`${baseURL}/auth/login`, credentials);
        localStorage.setItem('authToken', response.data.token);
    } catch (error) {
        throw error;
    }
};

export const register = (user) => api.post(`${baseURL}/auth/register`, user)

// export const logout = () => api.post('/auth/logout')
export const logout = () => {
    localStorage.removeItem('authToken'); // or sessionStorage
    api.post('/auth/logout');
}

export const getUser = () => api.get(`${baseURL}/api/user`)