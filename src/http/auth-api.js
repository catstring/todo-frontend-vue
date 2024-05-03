import api from "./api"

export const csrfCookie = () => api.get('/sanctum/csrf-cookie')

// export const login = async (credentials) => {
//         const response = await api.post('/auth/login', credentials);
//         return response.data
// }

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        // Store the token in localStorage or sessionStorage
        localStorage.setItem('authToken', response.data.token);
        // console.log(response.data.token)
        return response.data;
    } catch (error) {
        // Handle error appropriately
        throw error;
    }
};

export const register = (user) => api.post('/auth/register', user)

export const logout = () => api.post('/auth/logout')

export const getUser = () => api.get('/api/user')