import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  const res = await apiClient.post("/register", data);
  return res;
};
