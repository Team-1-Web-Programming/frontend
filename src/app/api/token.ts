import apiClient from "@/services/api";
import { toast } from "react-toastify";

export default function useToken() {}

export const getToken = async () => {
  const res = await apiClient.get("/token");
  localStorage.setItem("X-CSRF-TOKEN", res?.data?.token);
  return res?.data?.token;
};
