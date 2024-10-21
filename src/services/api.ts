import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      return Promise.reject(error);
    }
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "An error occurred. Please try again.";

      console.error("API error:", message);

      toast.error(message);

      return Promise.reject(new Error(message));
    }

    return Promise.reject(
      new Error("Network error. Please check your connection.")
    );
  }
);

export default apiClient;
