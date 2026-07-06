// src/services/propertyService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getProperties = async () => {
  const res = await axios.get(`${API_URL}/api/properties`);
  return res.data;
};

export const searchProperties = async (filters) => {
  const res = await axios.get(`${API_URL}/api/properties/search`, { params: filters });
  return res.data;
};

export const uploadProperty = async (data, token) => {
  const res = await axios.post(`${API_URL}/api/properties/upload`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
