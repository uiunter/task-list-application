import axios from 'axios';

const BASE_URL = 'http://localhost:8089/api/tasks';

// Получение задач
export const fetchTasks = async (token) => {
    const response = await axios.get(BASE_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Создание задачи
export const createTask = async (task, token) => {
    const response = await axios.post(BASE_URL, task, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Обновление задачи
export const updateTaskById = async (id, updatedFields, token) => {
    const response = await axios.patch(`${BASE_URL}/${id}`, updatedFields, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Удаление задачи
export const deleteTaskById = async (id, token) => {
    await axios.delete(`${BASE_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
