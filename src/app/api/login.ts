import apiClient from "@/services/api";
import { useCsrfToken } from "@shopify/react-csrf";
import { toast } from "react-toastify";

export const login = async (data: { email: string; password: string }) => {
  try {
    const fd = new FormData
    fd.append('email', data?.email)
    fd.append('password', data?.password)
    const res = await apiClient.post("/login", fd);
    console.log(res);
  } catch (error: any) {
    console.log(error)
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
