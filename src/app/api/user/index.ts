import apiClient from "@/services/api";
import { toast } from "react-toastify";

export const getUser = async () => {
  try {
    const res = await apiClient.get("/user");
    return res;
  } catch (error) {
    console.log(error)
    throw error;
  }
};
