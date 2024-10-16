import { useCsrfToken } from "@shopify/react-csrf";
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("X-CSRF-TOKEN");
    if (token) {
      config.headers["X-CSRF-TOKEN"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
