import axios from 'axios';
import {logoutUser} from './auth'

const api = axios.create({
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            logoutUser();
        }
        return Promise.reject(error);
    }
);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const loginUser = async (user) => {
    const response = await api.post('/auth/login', user);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('wsId', response.data.wsId);
    return response.status === 201;
};

export const registerUser = async (user) => {
    const response = await api.post('/auth/register', user);
    return response.status === 201;
};

export const getComments = async (postId, offset = 0, limit = 25) => {
    const response = await api.get(`/comment/${postId}`, { params: { offset, limit } });
    return response.data;
};

export const createComment = async (postId, comment) => {
    const response = await api.post(`/comment/${postId}`, comment);
    return response.data;
};

export const updateComment = async (commentId, updatedData) => {
    const response = await api.put(`/comment/${commentId}`, updatedData);
    return response.data;
};

export const generatePresigned = async (mimetype) => {
    const response = await api.post('/file', {mimetype: mimetype.mimetype, extension: mimetype.extension});
    console.log(response)
    return response.data;
}