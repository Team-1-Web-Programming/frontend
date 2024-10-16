import apiClient from "@/services/api";
import { toast } from "react-toastify";


export default function useToken() {

}

export const getToken = async () => {
  try {
    const res = await apiClient.get("/token");
    localStorage.setItem('X-CSRF-TOKEN', res?.data?.token)
    return res?.data?.token
  } catch (error: any) {
    toast.error(error || error?.message, { pauseOnHover: true });
  }
};
