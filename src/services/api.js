import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getInventory = async () => {
    try {
      const response = await api.get("products");
      return response.data;
    } catch (error) {
    }
  };