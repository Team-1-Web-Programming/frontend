import apiClient from "@/services/api";
import { toast } from "react-toastify";

type TAddresses = {
  id: number;
  user_id: number;
  is_default: number;
  name: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  country: string;
  postal_code: string;
  created_at: string | Date;
  updated_at: string | Date;
};

export const getAddressDefault = async () => {
  const res = await apiClient.get("/user/address/default");
  return res
};
