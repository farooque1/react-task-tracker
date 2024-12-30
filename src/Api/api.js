import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchTasks = () => apiClient.get('/todos');
export const createTask = (task) => apiClient.post('/todos', task);
export const updateTask = (id, updates) => apiClient.put(`/todos/${id}`, updates);
export const deleteTask = (id) => apiClient.delete(`/todos/${id}`);
