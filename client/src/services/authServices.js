// src/services/authService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
  const res = await axios.post(`${API_URL}/api/auth/login`, credentials);
  return res.data;
};

export const register = async (data) => {
  const res = await axios.post(`${API_URL}/api/auth/register`, data);
  return res.data;
};
