import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const getUser = async () => {
  const res = await apiClient.get("/user");
  return res;
};
