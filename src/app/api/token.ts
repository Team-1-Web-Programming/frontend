import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const token = async () => {
  try {
    const res = await apiClient.get("/token");
    console.log(res);
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
