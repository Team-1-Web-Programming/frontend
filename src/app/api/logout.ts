import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const logout = async () => {
  try {
    const res = await apiClient.post("/logout");
    console.log(res);
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
