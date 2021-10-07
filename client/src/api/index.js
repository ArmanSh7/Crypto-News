import axios from 'axios';

const url = 'http://localhost:5000/news';

export const fetchNews = () => axios.get(url);
export const createNews = (newPost) => axios.post(url, newPost);
export const updateNews = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deleteNews = (id) => axios.delete(`${url}/${id}`);
export const likeNews = (id) => axios.patch(`${url}/${id}/likePost`);