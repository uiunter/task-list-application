import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088/api/v1/auth';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Аутентификация
export const authenticate = async (username, password) => {
    const response = await apiClient.post('/authenticate', {
        username,
        password
    });
    return response.data;
};

// Регистрация
export const register = async (username, password, email) => {
    const response = await apiClient.post('/register', { username, password, email });
    return response.data;
};

// Активация аккаунта
export const activateAccount = async (token) => {
    const response = await apiClient.get('/activate-account', {
        params: { token }, // Удобная передача query-параметров
    });
    return response.data;
};
