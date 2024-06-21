import api from "./api"

const subpathPrefix = import.meta.env.VITE_SUBPATH_PREFIX

export const csrfCookie = () => api.get(`${subpathPrefix}/sanctum/csrf-cookie`)

// export const login = async (credentials) => {
//         const response = await api.post('/auth/login', credentials);
//         return response.data
// }

export const login = async (credentials) => {
    try {
        const response = await api.post(`${subpathPrefix}/auth/login`, credentials);
        localStorage.setItem('authToken', response.data.token);
    } catch (error) {
        throw error;
    }
};

export const register = (user) => api.post(`${subpathPrefix}/auth/register`, user)

// export const logout = () => api.post('/auth/logout')
export const logout = () => {
    localStorage.removeItem('authToken'); // or sessionStorage
    api.post(`${subpathPrefix}/auth/logout`);
}

export const getUser = () => api.get(`${subpathPrefix}/api/user`)