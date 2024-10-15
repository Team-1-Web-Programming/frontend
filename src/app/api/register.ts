import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const res = await apiClient.post("/register", data);
    console.log(res);
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
