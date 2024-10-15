import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const login = async (data: { email: string; password: string }) => {
  try {
    const res = await apiClient.post("/login", data);
    console.log(res);
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
