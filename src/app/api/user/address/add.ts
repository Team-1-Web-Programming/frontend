import apiClient from "@/services/api";
import { toast } from "react-toastify";

type TAddress = {
  id: number;
  user_id: number;
  is_default: number;
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country?: string;
  postal_code: string;
  created_at?: string | Date;
  updated_at?: string | Date;
};

export const addAddress = async (data: TAddress) => {
  const res = await apiClient.post(`/user/address`, data);
  return res;
};
