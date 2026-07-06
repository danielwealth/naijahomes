// src/services/forumService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = async () => {
  const res = await axios.get(`${API_URL}/api/forum`);
  return res.data;
};

export const createPost = async (data, token) => {
  const res = await axios.post(`${API_URL}/api/forum`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
